from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    birthday = Column(DateTime, nullable=True)
    occupation = Column(String, nullable=True)
    sign_up_day = Column(DateTime)
    
    emotions = relationship("Emotion", back_populates="owner")
    sent_chats = relationship("Chat", foreign_keys=[Chat.sender_id], back_populates="sender")
    received_chats = relationship("Chat", foreign_keys=[Chat.receiver_id], back_populates="receiver")

class Emotion(Base):
    __tablename__ = "emotions"

    id = Column(Integer, primary_key=True, index=True)
    before_card1_level = Column(Integer)
    before_card2_level = Column(Integer)
    before_card3_level = Column(Integer)
    story = Column(String, nullable=True)
    thoughts_action = Column(String, nullable=True)
    consequences = Column(String, nullable=True)
    feeling_of_consequences = Column(String, nullable=True)
    result_of_expect = Column(Integer, nullable=True)
    take_out = Column(String, nullable=True)
    after_card1_level = Column(Integer)
    after_card2_level = Column(Integer)
    after_card3_level = Column(Integer)
    create = Column(DateTime)
    
    owner_id = Column(String, ForeignKey("users.id"))
    shared_with_id = Column(String, ForeignKey("users.id"), nullable=True)
    
    owner = relationship("User", back_populates="emotions")
    chats = relationship("Chat", back_populates="emotion")

class Chat(Base):
    __tablename__ = "chats"

    id = Column(Integer, primary_key=True, index=True)
    content = Column(String)
    create = Column(DateTime)
    
    emotion_id = Column(Integer, ForeignKey("emotions.id"))
    sender_id = Column(String, ForeignKey("users.id"))
    receiver_id = Column(String, ForeignKey("users.id"))

    emotion = relationship("Emotion", back_populates="chats")
    sender = relationship("User", foreign_keys=[sender_id], back_populates="sent_chats")
    receiver = relationship("User", foreign_keys=[receiver_id], back_populates="received_chats")