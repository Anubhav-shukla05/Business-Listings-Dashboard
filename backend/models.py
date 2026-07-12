from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class BusinessListing(Base):
    __tablename__ = "business_listings"

    id = Column(Integer, primary_key=True, index=True)
    business_name = Column(String(255))
    category = Column(Text)
    city = Column(String(100))
    address = Column(Text)
    phone = Column(String(50))
    source = Column(String(100))
