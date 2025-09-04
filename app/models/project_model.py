from pydantic import BaseModel
from typing import Optional

class Get_project(BaseModel):
    collection: str

class Get_image(BaseModel):
    image_id: str

class Add_project(BaseModel):
    collection: str
    document_id: str
    title: str
    description: str
    link: Optional[str] = None
    dueDate: str

class Update_project(BaseModel):
    collection: str
    document_id: str
    project_id: str
    title: Optional[str] = None
    description: Optional[str] = None
    link: Optional[str] = None
    dueDate: Optional[str] = None

class Delete_project(BaseModel):
    collection: str
    document_id: str
    project_id: str

class Use_groq_basemodel(BaseModel):
    project: str

