import os
from dotenv import load_dotenv
import firebase_admin
from firebase_admin import credentials, auth
from fastapi import HTTPException

load_dotenv('.env.app')

cred_path = os.getenv('FIREBASE_CREDENTIALS_PATH')

if not cred_path:
    raise ValueError("FIREBASE_CREDENTIALS_PATH not set in .env.app file")

cred = credentials.Certificate(cred_path)
firebase_admin.initialize_app(cred)

def verify_token(token: str):
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")