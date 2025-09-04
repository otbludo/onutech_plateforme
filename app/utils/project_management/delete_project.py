# Fichier: app/crud_delete.py
import os
from dotenv import load_dotenv
from bson.objectid import ObjectId
from fastapi import HTTPException, status
from app.db.db_config import fs, informatique_collection, BTP_collection
from app.models.project_model import Delete_project
from app.messages.succes import succes_delete_project
from app.messages.errors import  invalid_ObjectId, projet_notfound, collection_notfound, document_notfound, error_delete_image, projet_notfound_after_image_deletion, error


load_dotenv()
NAME_COLLECTION1 = os.getenv("NAME_COLLECTION1")
NAME_COLLECTION2 = os.getenv("NAME_COLLECTION2")

async def delete_project(donnees: Delete_project):
    try:
        # Valide l'ObjectId du document
        try:
            document_object_id = ObjectId(donnees.document_id)
        except Exception:
            return invalid_ObjectId()

        # Vérifie la collection
        collection_name = donnees.collection.strip().lower()
        if collection_name == NAME_COLLECTION1.lower():
            document = await informatique_collection.find_one(
                {"_id": document_object_id, "project.project_id": donnees.project_id},
                {"project.$": 1}
            )
        elif collection_name == NAME_COLLECTION2.lower():
            document = await BTP_collection.find_one(
                {"_id": document_object_id, "project.project_id": donnees.project_id},
                {"project.$": 1}
            )
        else:
            return collection_notfound()

        # Vérifie si le document existe
        if not document:
            return document_notfound()
        
        # Vérifie si le projet existe
        if not document.get("project"):
            return projet_notfound()

        project_data = document["project"][0]
        image_id_str = project_data.get("image")

        # Supprime l'image de GridFS si elle existe
        if image_id_str:
            try:
                image_object_id = ObjectId(image_id_str)
                await fs.delete(image_object_id)
            except Exception as e:
                return error_delete_image(image_id_str, e)

        # Supprime le projet dans le tableau
        if collection_name == NAME_COLLECTION1.lower():
            result = await informatique_collection.update_one(
                {"_id": document_object_id},
                {"$pull": {"project": {"project_id": donnees.project_id}}}
            )
        else:
            result = await BTP_collection.update_one(
                {"_id": document_object_id},
                {"$pull": {"project": {"project_id": donnees.project_id}}}
            )

        if result.modified_count == 0:
            return projet_notfound_after_image_deletion()

        return succes_delete_project()
    except HTTPException as http_err:
        raise http_err
    except Exception as e:
        return error(e)
