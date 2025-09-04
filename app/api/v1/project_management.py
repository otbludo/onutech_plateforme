import os
from dotenv import load_dotenv
from typing  import Optional
from fastapi import APIRouter, status, UploadFile, File, Form, status
from app.models.project_model import Get_project, Use_groq_basemodel, Add_project, Delete_project, Update_project
from app.services.groq import generative_groq
from app.utils.project_management.add_project import add_project
from app.utils.project_management.edit_project import update_project
from app.utils.project_management.delete_project import delete_project
from app.utils.project_management.get_project import get_project, get_image


load_dotenv()
router = APIRouter()


@router.post("/get_project", status_code=status.HTTP_200_OK)
async def get_projects_route(donnees: Get_project):
    return await get_project(donnees)


@router.get("/images/{image_id}")
async def get_image_router(image_id: str):
    """
    Récupère une image stockée dans GridFS à partir de son ObjectId
    """
    return await get_image(image_id)
    

@router.post("/add_project", status_code=status.HTTP_201_CREATED)
async def add_project_to_document_route(
    collection: str = Form(...),
    document_id: str = Form(...),
    image_file: UploadFile = File(...),
    title: str = Form(...),
    description: str = Form(...),
    link: Optional[str] = Form(None),
    dueDate: str = Form(...)
):
    """
    Route pour ajouter un projet 
    """
    donnees = Add_project(
        collection = collection,
        document_id = document_id,
        title = title,
        description = description,
        link = link,
        dueDate = dueDate,
    )
    return await add_project(
        image_file,
        donnees
    )



@router.delete("/delete_project", status_code=status.HTTP_200_OK)
async def delete_project_route(donnees: Delete_project):
    """
    Route pour supprimer un projet d'une colonne spécifique, y compris l'image associée dans GridFS.
    """
    return await delete_project(donnees)



@router.put("/update_project", status_code=status.HTTP_200_OK)
async def update_project_route(
    collection: str = Form(...),
    document_id: str = Form(...),
    project_id: str = Form(...),
    title: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    link: Optional[str] = Form(None),
    dueDate: Optional[str] = Form(None),
    image_file: Optional[UploadFile] = File(None)
):
    """
    Route pour mettre à jour un ou plusieurs champs d'un projet, y compris l'image.
    """
    donnees = Update_project(
        collection = collection,
        document_id = document_id,
        project_id = project_id,
        title = title,
        description = description,
        link = link,
        dueDate = dueDate,
    )

    return await update_project(donnees, image_file)


@router.post("/generative_groq", status_code=status.HTTP_200_OK)
async def use_Generative_groq_route(donnees: Use_groq_basemodel):
    """
    Route pour effectuer un devie partiel.
    """
    return await generative_groq(donnees)