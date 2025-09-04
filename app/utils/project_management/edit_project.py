import os
from dotenv import load_dotenv
from bson.objectid import ObjectId
from fastapi import HTTPException, status, UploadFile, Form, File
from typing import Optional
from app.db.db_config import informatique_collection, BTP_collection, fs
from app.models.project_model import Update_project
from app.messages.succes import succes_update_project
from app.messages.errors import invalid_ObjectId, document_notfound, projet_notfound, collection_notfound, error_delete_image, error_uplaod_imagr, champ_update_notfound, error

load_dotenv()
NAME_COLLECTION1 = os.getenv("NAME_COLLECTION1")
NAME_COLLECTION2 = os.getenv("NAME_COLLECTION2")

async def update_project(donnees: Update_project, image_file: Optional[UploadFile] = None):
    # Valide l'ID du document
    try:
        try:
            document_object_id = ObjectId(donnees.document_id)
        except Exception:
            return invalid_ObjectId()

        # Préparer les champs à mettre à jour
        update_data = {}
        if donnees.title is not None:
            update_data["project.$.title"] = donnees.title
        if donnees.description is not None:
            update_data["project.$.description"] = donnees.description
        if donnees.link is not None:
            update_data["project.$.link"] = donnees.link
        if donnees.dueDate is not None:
            update_data["project.$.dueDate"] = donnees.dueDate
        
        
        # Gestion de la nouvelle image
        collection_name = donnees.collection.strip().lower()
        if image_file:
            # Récupérer le projet actuel
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
            if not document :
                return document_notfound()
            
            # Vérifie si le projet existe
            if not document.get("project"):
                return projet_notfound()

            project_data = document["project"][0]
            old_image_id_str = project_data.get("image")

            # Supprimer l'ancienne image si elle existe
            if old_image_id_str:
                try:
                    old_image_id = ObjectId(old_image_id_str)
                    await fs.delete(old_image_id)
                except Exception as e:
                    return error_delete_image(e)

            # Uploader la nouvelle image
            try:
                new_file_id = await fs.upload_from_stream(image_file.filename, image_file.file)
                update_data["project.$.image"] = str(new_file_id)
            except Exception as e:
                return error_uplaod_imagr(e)

        if not update_data:
            return champ_update_notfound()

        # Mise à jour dans la collection
        if collection_name == NAME_COLLECTION1.lower():
            result = await informatique_collection.update_one(
                {"_id": document_object_id, "project.project_id": donnees.project_id},
                {"$set": update_data}
            )
        else:
            result = await BTP_collection.update_one(
                {"_id": document_object_id, "project.project_id": donnees.project_id},
                {"$set": update_data}
            )

        if result.matched_count == 0:
            return projet_notfound()

        return succes_update_project()
    except HTTPException as http_err:
        raise http_err
    except Exception as e:
        return error(e)