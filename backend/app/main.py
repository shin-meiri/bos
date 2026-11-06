from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.database import engine, Base
from app.api import auth

# Buat tabel (untuk development)
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# CORS - sesuaikan dengan domain frontend nanti
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://mayhost.com"],  # Ganti dengan domain frontend di production
    allow_credentials=True,
    allow_methods=["https://mayhost.com"],
    allow_headers=["https://mayhost.com"],
)

app.include_router(auth.router, prefix=f"{settings.API_V1_STR}/auth", tags=["auth"])

@app.get("/")
def root():
    return {"message": "BOS API is running"}

@app.get("/health")
def health():
    return {"status": "ok"}