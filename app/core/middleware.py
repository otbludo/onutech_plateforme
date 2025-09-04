from fastapi.middleware.cors import CORSMiddleware

def add_cors_middleware(app):
    origins = [
        "http://localhost",
        "http://127.0.0.1:8000",
        "http://localhost:5173",
        "http://127.0.0.1:5173"
        
    ]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],  
        allow_headers=["*"],  
    )