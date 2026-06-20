🌍 Global Weather Prediction Dashboard

Real-Time Weather Intelligence with AI-Powered Risk Predictions

A full-stack web application that delivers live weather information and intelligent risk predictions for any city worldwide. Search for a city and instantly receive weather insights, disruption risk analysis, interactive mapping, and event tracking in a modern dashboard experience.

Python 3.8+ • FastAPI • Next.js 14 • Scikit-Learn • SQLite • Open-Meteo

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📖 Overview

Global Weather Prediction Dashboard is designed to provide real-time weather intelligence combined with machine learning-driven risk assessment.

Users can search for any city across the globe and receive:

🌦️ Current weather conditions

🌡️ Temperature information

💨 Wind speed analysis

🌧️ Precipitation monitoring

🤖 AI-generated risk scores

🗺️ Interactive map visualization

📊 Recent event tracking

The platform leverages free and open-source technologies, making advanced weather analytics accessible without requiring subscriptions or API keys.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Key Features

🌍 Global City Search

Search for any city worldwide and instantly retrieve location-specific weather intelligence.

🌦️ Live Weather Monitoring

Access current weather conditions including temperature, wind speed, and precipitation data.

🤖 AI-Powered Risk Prediction

Generate intelligent risk scores ranging from 0–100 and classify conditions as:

• LOW Risk

• MEDIUM Risk

• HIGH Risk

🗺️ Interactive Mapping

Visualize searched locations using Leaflet and OpenStreetMap with dynamic map centering.

📊 Smart Analytics Dashboard

Review weather predictions, alerts, and historical event data through an intuitive interface.

⚡ Real-Time Updates

Dashboard data refreshes automatically to ensure users receive the latest information.

🆓 Completely Free

No API keys, subscriptions, or hidden fees required.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛠 Technology Stack

Backend

• FastAPI

• Python 3.8+

• SQLite Database

• Scikit-Learn

• Open-Meteo API

Frontend

• Next.js 14

• React

• Leaflet.js

• OpenStreetMap

• Axios

• Responsive CSS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 Installation

Prerequisites

• Python 3.8 or later

• Node.js 16 or later

Clone Repository

```bash
git clone https://github.com/krishnapopat130324-art/prediction-app.git

cd prediction-app
```

Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python main.py
```

Backend Server

http://localhost:8000

Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend Application

http://localhost:3000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📡 API Endpoints

/predict

Generate weather predictions and risk assessments for a given location.

Example:

```text
/predict?lat=51.5074&lon=-0.1278
```

/events

Retrieve recent weather-related events and alerts.

/debug

Inspect API responses and system diagnostics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📂 Project Structure

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

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚙ Configuration

Changing the Default City

The application currently uses Rajkot, Gujarat as the default location.

To modify:

1. Update coordinates inside backend/scraper.py

2. Update coordinates inside frontend/app/Map.jsx

3. Restart both frontend and backend services

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 Project Highlights

✅ Global city weather search

✅ Machine learning risk prediction

✅ Interactive mapping interface

✅ Real-time dashboard updates

✅ Event monitoring system

✅ Responsive modern design

✅ Free and open-source architecture

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Skills Demonstrated

• Full-Stack Development

• Machine Learning Integration

• API Development

• Data Visualization

• Geospatial Applications

• Frontend Engineering

• Backend Architecture

• Database Management

• Software Engineering Best Practices
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👨‍💻 Maintainer

Krishna Popat

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Built to make weather intelligence accessible, understandable, and actionable for everyone.
