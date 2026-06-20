# 🌍 Global Weather Prediction Dashboard

### Real-Time Weather Intelligence with AI-Powered Risk Predictions

A full-stack weather intelligence platform that provides live weather conditions, machine learning-based risk predictions, interactive mapping, and real-time event monitoring for any city worldwide.

![Python](https://img.shields.io/badge/Python-3.8+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-ML-orange)
![License](https://img.shields.io/badge/License-MIT-success)

---

## 📖 Overview

Global Weather Prediction Dashboard is a full-stack application that combines real-time weather intelligence with machine learning-powered disruption risk analysis.

The platform allows users to search for any city in the world and instantly receive weather insights, risk assessments, location visualization, and recent event information through a modern interactive dashboard.

### Key Objectives

* Deliver real-time weather intelligence
* Predict weather-related disruption risks
* Visualize locations using interactive maps
* Provide event monitoring capabilities
* Create a fast and user-friendly experience

---

## ✨ Features

### 🌍 Global City Search

Search any city worldwide and retrieve location-specific weather intelligence within seconds.

### 🌦️ Live Weather Data

Access real-time:

* Temperature
* Wind Speed
* Precipitation
* Weather Conditions

### 🤖 AI-Powered Risk Prediction

Generate intelligent risk scores from 0–100 and classify weather conditions into:

* 🟢 Low Risk
* 🟡 Medium Risk
* 🔴 High Risk

### 🗺️ Interactive Mapping

Visualize searched locations using Leaflet and OpenStreetMap with dynamic map centering.

### 📊 Smart Analytics Dashboard

Monitor predictions, alerts, and recent weather-related events through an intuitive interface.

### ⚡ Real-Time Updates

Dashboard data automatically refreshes every 30 seconds to ensure accuracy.

### 🆓 100% Free

No subscriptions.

No API keys.

No hidden costs.

---

## 🏗️ System Architecture

```text
User Search
     │
     ▼
City Geolocation
     │
     ▼
Open-Meteo API
     │
     ▼
Weather Data Processing
     │
     ├── Risk Prediction Engine
     ├── Event Monitoring
     └── Database Storage
     │
     ▼
Interactive Dashboard
```

---

## 🛠️ Technology Stack

| Category         | Technologies              |
| ---------------- | ------------------------- |
| Backend          | FastAPI, Python           |
| Database         | SQLite                    |
| Machine Learning | Scikit-Learn              |
| Weather Data     | Open-Meteo API            |
| Frontend         | Next.js 14, React         |
| Mapping          | Leaflet.js, OpenStreetMap |
| Networking       | Axios                     |
| Styling          | Responsive CSS            |

---

## 📂 Project Structure

```text
prediction-app/

├── backend/
│   ├── main.py
│   ├── scraper.py
│   ├── predictor.py
│   ├── database.py
│   └── requirements.txt
│
├── frontend/
│   ├── app/
│   │   ├── page.js
│   │   ├── layout.js
│   │   ├── components.js
│   │   └── Map.jsx
│   │
│   ├── package.json
│   └── next.config.js
│
├── .gitignore
└── README.md
```

---

## 🚀 Installation

### Prerequisites

* Python 3.8+
* Node.js 16+

### Clone Repository

```bash
git clone https://github.com/krishnapopat130324-art/prediction-app.git

cd prediction-app
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python main.py
```

Backend Server:

```text
http://localhost:8000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend Application:

```text
http://localhost:3000
```

---

## 📡 API Endpoints

| Endpoint                           | Description                                    |
| ---------------------------------- | ---------------------------------------------- |
| `/predict`                         | Generate weather predictions and risk analysis |
| `/events`                          | Retrieve recent weather events                 |
| `/debug`                           | Debug API responses                            |
| `/predict?lat=51.5074&lon=-0.1278` | Example prediction request                     |

---

## ⚙️ Configuration

### Change Default City

The application currently uses Rajkot, Gujarat as the default location.

Update the coordinates inside:

* `backend/scraper.py`
* `frontend/app/Map.jsx`

Restart both services after making changes.

---

## 📈 Project Highlights

✅ Global Weather Search

✅ AI-Based Risk Prediction

✅ Interactive Maps

✅ Real-Time Data Updates

✅ Event Monitoring

✅ Responsive Design

✅ Open-Source Architecture

---

## 🎯 Skills Demonstrated

* Full-Stack Development
* API Development
* Machine Learning Integration
* Data Processing
* Geospatial Applications
* Frontend Engineering
* Backend Architecture
* Database Management
* Software Engineering

---

## 👨‍💻 Author

**Krishna Popat**

---

### Built to make weather intelligence accessible, understandable, and actionable for everyone.
