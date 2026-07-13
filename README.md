# Business Listings Dashboard

A full-stack web application built using **React.js**, **FastAPI**, and **MySQL**. The application collects business listings through web scraping, stores them in a MySQL database, and displays business insights using tables and charts.

---

## Features

- Web scraping of business listings
- Search businesses by city
- Dashboard summary
- City-wise business count
- Category-wise business count
- Source-wise business count
- Interactive charts
- Insert business using API
- MySQL database integration

---

## Tech Stack

### Frontend
- React.js
- Axios
- Recharts

### Backend
- FastAPI
- SQLAlchemy
- Uvicorn

### Database
- MySQL

### Web Scraping
- BeautifulSoup
- Requests

---

## Project Structure

```
Business-Listings-Dashboard/
│
├── backend/
├── frontend/
├── scraper/
├── Data/
├── database/
├── docs/
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Home API |
| GET | /businesses | Get business listings |
| GET | /search?city=CityName | Search businesses by city |
| GET | /city-count | City-wise business count |
| GET | /category-count | Category-wise business count |
| GET | /source-count | Source-wise business count |
| GET | /dashboard-summary | Dashboard summary |
| POST | /insert-listing | Insert a new business |

---

## Setup

### Clone the Repository

```bash
git clone https://github.com/Anubhav-shukla05/Business-Listings-Dashboard.git
```

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Dashboard Screenshots

### Dashboard

![Dashboard](docs/dashboard_home.png)

### City Wise Chart

![City Chart](docs/city_chart.png)

### Source Wise Chart

![Source Chart](docs/source_chart.png)

### Category Wise Chart

![Category Chart](docs/category_chart.png)

---

## Challenges Faced

- Scraping and cleaning business listing data
- Connecting FastAPI with MySQL
- Building REST APIs
- Displaying business data using charts

---

## Author

**Anubhav Shukla**

GitHub: https://github.com/Anubhav-shukla05