import os
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorGridFSBucket
from dotenv import load_dotenv
import asyncio

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")

client = AsyncIOMotorClient(MONGO_URI)
database = client[DB_NAME]

fs = AsyncIOMotorGridFSBucket(database)

BTP_collection = database.get_collection("projet_BTP")
informatique_collection = database.get_collection("projets_informatique")

