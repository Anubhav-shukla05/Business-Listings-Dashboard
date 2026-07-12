# Business Listings Dashboard

## Project Overview

This project is a full-stack Business Listings Dashboard developed using React.js, FastAPI, and MySQL.

The application scrapes business listing data, stores it in a MySQL database, and displays useful insights through charts and tables.

---

## Features

- Dashboard Summary Cards
- Search Business by City
- City-wise Business Count
- Category-wise Business Count
- Source-wise Business Count
- Charts using Recharts
- FastAPI REST APIs
- MySQL Database Integration
- Web Scraping using BeautifulSoup

---

## Tech Stack

### Frontend
- React.js
- Axios
- Recharts

### Backend
- FastAPI
- SQLAlchemy

### Database
- MySQL

### Web Scraping
- BeautifulSoup
- Requests

---

## Project Structure

```
Business-Listings-Dashboard
│
├── backend
├── frontend
├── scraper
├── database
├── Data
├── docs
└── README.md
```

---

## API Endpoints

| API | Description |
|------|-------------|
| /dashboard-summary | Dashboard Cards |
| /city-count | City-wise Count |
| /category-count | Category-wise Count |
| /source-count | Source-wise Count |
| /search?city=Boston | Search Businesses |

---

## How to Run

### Backend

```bash
cd backend
uvicorn app:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Database

MySQL

Table Name:

```
listing_master
```

---

## Challenges Faced

- Scraping a large amount of business data
- Cleaning duplicate records
- Connecting FastAPI with MySQL
- Displaying dashboard data using charts

---

## Author

Anubhav Shukla