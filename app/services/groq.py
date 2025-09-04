import os
from groq import Groq
from dotenv import load_dotenv
from app.messages.errors import error

load_dotenv()
# client = Groq(api_key=os.environ.get("GROQ_KEY"))

async def generative_groq(project:str):
    prompt = f"""
        Tu es une borne interactive pour une entreprise spécialisée en informatique et en BTP.

        🎯 Ta mission :
        - Générer un devis partiel (sans prix) concernant le projet suivant : {project}.
        - Le devis doit présenter uniquement les rubriques techniques : études, lots de travaux, main-d'œuvre, phases, matériels, etc.
        - Ne mets aucun prix ni estimation chiffrée.

        🚫 Si le projet n’est pas en rapport avec l’informatique ou le BTP, tu dois répondre UNIQUEMENT et STRICTEMENT par cette phrase, sans explication ni justification supplémentaire (retourne seulement le message suivant ) :
        "Veuillez entrer un projet dans le domaine du BTP ou de l'informatique."
    """
    try:
        chat_completion = client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model="meta-llama/llama-4-maverick-17b-128e-instruct"
        )
        message_text = chat_completion.choices[0].message.content
        return message_text
    except Exception as e:
        return error(e)