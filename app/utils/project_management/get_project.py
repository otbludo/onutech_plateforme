import os
import io
from dotenv import load_dotenv
from fastapi import HTTPException
from bson.objectid import ObjectId
from fastapi.responses import StreamingResponse
from app.db.db_config import fs, informatique_collection, BTP_collection
from app.messages.errors import collection_notfound, error
from app.models.project_model import Get_project

load_dotenv()
NAME_COLLECTION1 = os.getenv("NAME_COLLECTION1")
NAME_COLLECTION2 = os.getenv("NAME_COLLECTION2")

async def get_project(donnees: Get_project):
    try:
        collection_name = donnees.collection.strip().lower()
        if collection_name == NAME_COLLECTION1.lower(): 
            cursor = informatique_collection.find({})
        elif collection_name == NAME_COLLECTION2.lower(): 
            cursor = BTP_collection.find({})
        else:
            return collection_notfound()

        # Convertir le cursor en liste
        documents = []
        async for doc in cursor:
            doc["_id"] = str(doc["_id"])
            documents.append(doc)

        return documents
    except HTTPException as http_err:
        raise http_err
    except Exception as e:
        return error(e)
    


async def get_image(image_id):
    try:
        file_id = ObjectId(image_id)
        grid_out = await fs.open_download_stream(file_id)
        content = await grid_out.read()

        # si tu veux deviner le vrai content_type du fichier (jpeg/png...)
        content_type = "image/jpeg"  # ou image/png si tu le sais à l'upload

        return StreamingResponse(io.BytesIO(content), media_type=content_type)

    except Exception:
        raise HTTPException(status_code=404, detail="Image not found")
