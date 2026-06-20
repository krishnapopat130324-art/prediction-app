from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from database import save_event, get_recent_events, find_nearby_events
from scraper import fetch_weather, RAJKOT_LAT, RAJKOT_LON
from predictor import predictor

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "🎯 PreDuck Prediction API",
        "city": "Rajkot, Gujarat",
        "status": "✅ Running",
        "endpoints": {
            "/predict": "Get prediction for ANY city (use ?lat=X&lon=Y)",
            "/events": "View recent events",
            "/nearby": "Find nearby events"
        }
    }

@app.get("/predict")
def predict(lat: float = None, lon: float = None):
    """
    Get prediction for ANY city!
    Use: /predict?lat=51.5074&lon=-0.1278 (London)
    If no lat/lon provided, defaults to Rajkot
    """
    # 🔥 FIX: Use provided coordinates OR default to Rajkot
    if lat is None or lon is None:
        lat = RAJKOT_LAT
        lon = RAJKOT_LON
        print(f"📍 Using default: Rajkot ({lat}, {lon})")
    else:
        print(f"📍 Using provided coordinates: ({lat}, {lon})")
    
    # Fetch weather for the coordinates
    weather = fetch_weather(lat, lon)
    severity = predictor.predict(weather)
    
    # Get city name from weather data or use coordinates
    city_name = weather.get('city', f"Unknown ({lat}, {lon})")
    
    description = f"{city_name}: {weather['temperature']}°C, Rain: {weather['precipitation']}mm"
    save_event(lat, lon, severity, 'weather', description, weather['temperature'], weather.get('source', 'API'))
    
    return {
        "location": {
            "city": city_name,
            "lat": lat,
            "lon": lon
        },
        "weather": weather,
        "prediction": {
            "severity": severity,
            "risk_level": "HIGH" if severity > 60 else "MEDIUM" if severity > 30 else "LOW",
            "timestamp": datetime.now().isoformat()
        }
    }

@app.get("/events")
def get_events(limit: int = 10):
    events = get_recent_events(limit)
    return {"events": [{
        'id': e['id'],
        'lat': e['lat'],
        'lon': e['lon'],
        'severity': e['severity'],
        'type': e['event_type'],
        'time': e['predicted_time'],
        'description': e['description']
    } for e in events]}

@app.get("/nearby")
def nearby_events(lat: float = RAJKOT_LAT, lon: float = RAJKOT_LON, radius: float = 5):
    nearby = find_nearby_events(lat, lon, radius)
    return {
        "city": "Rajkot, Gujarat",
        "nearby": nearby
    }

if __name__ == "__main__":
    import uvicorn
    print("\n" + "="*50)
    print("🚀 RAJKOT PREDICTION SERVER")
    print("📍 Default: Rajkot, Gujarat")
    print("🌐 API: http://localhost:8000")
    print("📝 Use: /predict?lat=X&lon=Y for ANY city")
    print("="*50 + "\n")
    uvicorn.run(app, host="0.0.0.0", port=8000)