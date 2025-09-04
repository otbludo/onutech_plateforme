# Fichier: app/crud.py
import os
import uuid
from dotenv import load_dotenv
from fastapi import HTTPException, UploadFile
from bson.objectid import ObjectId
from app.db.db_config import fs, informatique_collection, BTP_collection
from app.models.project_model import Add_project
from app.messages.succes import succes_add_project
from app.messages.errors import invalid_ObjectId, document_notfound, collection_notfound, error, error_delete_image

load_dotenv()
NAME_COLLECTION1 = os.getenv("NAME_COLLECTION1")
NAME_COLLECTION2 = os.getenv("NAME_COLLECTION2")

async def add_project(image_file: UploadFile, donnees: Add_project):
    try:
        donnees_dict = donnees.dict()

        # Sauvegarde du fichier dans GridFS
        try:
            file_content = await image_file.read()  # lecture async
            file_id = await fs.upload_from_stream(image_file.filename, file_content)
        except Exception as e:
                return error_delete_image(e)
        
        # Ajout infos projet
        donnees_dict["image"] = str(file_id)
        donnees_dict["project_id"] = str(uuid.uuid4())

        # Vérifie que document_id est un ObjectId valide
        try:
            document_object_id = ObjectId(donnees_dict["document_id"])
        except Exception:
            await fs.delete(file_id)
            return invalid_ObjectId()

        # Retirer document_id avant insertion dans le tableau project
        for key in ["document_id", "collection"]:
            donnees_dict.pop(key, None)

        # Mise à jour dans la bonne collection
        collection_name = donnees.collection.strip().lower()
        if collection_name == NAME_COLLECTION1.lower():
            result = await informatique_collection.update_one(
                {"_id": document_object_id},
                {"$push": {"project": donnees_dict}}
            )
        elif collection_name == NAME_COLLECTION2.lower():
            result = await BTP_collection.update_one(
                {"_id": document_object_id},
                {"$push": {"project": donnees_dict}}
            )
        else:
            await fs.delete(file_id)
            return collection_notfound()

        # Vérifie si le document existe
        if result.matched_count == 0:
            await fs.delete(file_id)
            return document_notfound()

        return succes_add_project()

    except HTTPException as http_err:
        raise http_err
    except Exception as e:
        return error(e)
