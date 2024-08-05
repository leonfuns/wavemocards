from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    emotions = relationship("Emotion", back_populates="owner")

class Emotion(Base):
    __tablename__ = "emotions"

    id = Column(Integer, primary_key=True, index=True)
    content = Column(String)
    timestamp = Column(DateTime)
    owner_id = Column(String, ForeignKey("users.id"))
    owner = relationship("User", back_populates="emotions")
    shared_with_id = Column(String, ForeignKey("users.id"), nullable=True)

class Chat(Base):
    __tablename__ = "chats"

    id = Column(Integer, primary_key=True, index=True)
    emotion_id = Column(Integer, ForeignKey("emotions.id"))
    sender_id = Column(String, ForeignKey("users.id"))
    receiver_id = Column(String, ForeignKey("users.id"))
    content = Column(String)
    timestamp = Column(DateTime)