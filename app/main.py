from fastapi import FastAPI
from app.core.middleware import add_cors_middleware
from app.api.v1.project_management import router as product_management


app = FastAPI()
add_cors_middleware(app)

app.include_router(product_management, prefix="/api/v1", tags=["product_management"])
