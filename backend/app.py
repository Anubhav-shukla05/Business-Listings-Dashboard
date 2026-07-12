from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import func

from backend.database import SessionLocal
from backend.models import BusinessListing

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Business Listings Dashboard API Running"
    }

@app.get("/businesses")
def get_businesses():
    db: Session = SessionLocal()

    businesses = db.query(BusinessListing).limit(10).all()

    db.close()
    return businesses

@app.get("/search")
def search_business(city: str = Query(...)):
    db = SessionLocal()

    businesses = (
        db.query(BusinessListing)
        .filter(BusinessListing.city.ilike(f"%{city}%"))
        .limit(20)
        .all()
    )

    db.close()
    return businesses

@app.get("/city-count")
def city_count():
    db = SessionLocal()

    data = (
        db.query(
            BusinessListing.city,
            func.count(BusinessListing.id).label("total")
        )
        .group_by(BusinessListing.city)
        .all()
    )

    db.close()

    result = []

    for city, total in data:
        result.append({
            "city": city,
            "total": total
        })

    return result

@app.get("/category-count")
def category_count():
    db = SessionLocal()

    data = (
        db.query(
            BusinessListing.category,
            func.count(BusinessListing.id).label("total")
        )
        .group_by(BusinessListing.category)
        .order_by(func.count(BusinessListing.id).desc())
        .limit(10)
        .all()
    )

    db.close()

    result = []

    for category, total in data:
        result.append({
            "category": category,
            "total": total
        })

    return result
    for category, total in data:
        result.append({
            "category": category,
            "total": total
        })

    return result

@app.get("/source-count")
def source_count():
    db = SessionLocal()

    data = (
        db.query(
            BusinessListing.source,
            func.count(BusinessListing.id).label("total")
        )
        .group_by(BusinessListing.source)
        .all()
    )

    db.close()

    result = []

    for source, total in data:
        result.append({
            "source": source,
            "total": total
        })

    return result

@app.get("/dashboard-summary")
def dashboard_summary():
    db = SessionLocal()

    total_businesses = db.query(BusinessListing).count()

    total_cities = (
        db.query(BusinessListing.city)
        .distinct()
        .count()
    )

    total_categories = (
        db.query(BusinessListing.category)
        .distinct()
        .count()
    )

    total_sources = (
        db.query(BusinessListing.source)
        .distinct()
        .count()
    )

    db.close()

    return {
        "total_businesses": total_businesses,
        "total_cities": total_cities,
        "total_categories": total_categories,
        "total_sources": total_sources
    }
