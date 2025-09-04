from fastapi import HTTPException, status

def error(e):
    raise HTTPException( status.HTTP_500_INTERNAL_SERVER_ERROR, detail = f"{str(e)}")

def invalid_ObjectId():
    raise HTTPException( status.HTTP_400_BAD_REQUEST, detail="Invalid ObjectId format for document_id." )

def projet_notfound():
    raise HTTPException( status.HTTP_404_NOT_FOUND, detail="Project not found." )

def collection_notfound():
    raise HTTPException( status.HTTP_404_NOT_FOUND, detail="Collection not found." )

def document_notfound():
    raise HTTPException( status.HTTP_404_NOT_FOUND, detail="document not found." )

def error_uplaod_imagr(e):
     raise HTTPException( status.HTTP_500_INTERNAL_SERVER_ERROR,  detail=f"Échec de l'upload de la nouvelle image: {e}")
def error_delete_image(image_id_str, e):
    raise HTTPException(status.HTTP_400_BAD_REQUEST, detail= f"L'image avec l'ID {image_id_str} n'a pas pu être supprimée de GridFS: {e}")

def projet_notfound_after_image_deletion():
    raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Project not found in document after image deletion (possible race condition)." )

def champ_update_notfound():
     raise HTTPException( status.HTTP_400_BAD_REQUEST, detail="Aucun champ à mettre à jour." )