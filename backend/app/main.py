from fastapi import FastAPI
from .routers import users, emotions, chats
from .database import create_tables

app = FastAPI()

@app.on_event("startup")
async def startup_event():
    create_tables()

app.include_router(users.router)
app.include_router(emotions.router)
app.include_router(chats.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}