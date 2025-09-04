import sys
import os
import asyncio

# Ajoute la racine du projet au chemin de recherche de Python
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

from app.db.db_config import client, BTP_collection, informatique_collection

COLUMNS_DATA_INFORMATIQUE = [
    {"title": 'Plateforme web/mobil', "project": []},
    {"title": 'Big data', "project": []},
    {"title": 'Autre', "project": []},
    {"title": "En cour", "project": []},
]

COLUMNS_DATA_BTP = [
    {"title": 'Plan', "project": []},
    {"title": 'Construction', "project": []},
    {"title": 'Traveaux de finitions', "project": []},
    {"title": "En cour", "project": []},
]

async def create_initial_structure():
    try:
        # Vérifie si les collections sont vides
        count_BTP = await BTP_collection.count_documents({})
        count_info = await informatique_collection.count_documents({})
        
        if count_info == 0 and count_BTP == 0:
            result_BTP = await BTP_collection.insert_many(COLUMNS_DATA_BTP)
            result_Info = await informatique_collection.insert_many(COLUMNS_DATA_INFORMATIQUE)
            print(
                f"✅ Structure initiale créée.\n"
                f"   → collection BTP : {len(result_BTP.inserted_ids)} documents\n"
                f"   → collection informatique : {len(result_Info.inserted_ids)} documents"
            )
        else:
            print("ℹ️  Les collections ne sont pas vides. Aucune insertion effectuée.")
    except Exception as e:
        print(f"❌ Une erreur s'est produite : {e}")

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(create_initial_structure())
