import requests
from datetime import datetime

# Rajkot, Gujarat coordinates (DEFAULT)
RAJKOT_LAT = 22.3039
RAJKOT_LON = 70.8022

def fetch_weather(lat=RAJKOT_LAT, lon=RAJKOT_LON):
    """
    Fetch REAL weather data for ANY city!
    """
    print("\n" + "="*50)
    print(f"🌤️ FETCHING WEATHER FOR: ({lat}, {lon})")
    print("="*50)
    
    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true&timezone=auto"
    
    try:
        response = requests.get(url, timeout=10)
        data = response.json()
        
        # Get temperature DIRECTLY from current_weather
        current = data.get('current_weather', {})
        temperature = current.get('temperature', 0)
        wind_speed = current.get('windspeed', 0)
        
        # Try to get city name from geocoding
        city_name = get_city_name(lat, lon)
        
        print(f"🌡️ TEMPERATURE: {temperature}°C")
        print(f"💨 WIND SPEED: {wind_speed} km/h")
        print(f"📍 CITY: {city_name}")
        
        result = {
            'temperature': temperature,
            'precipitation': 0.0,
            'wind_speed': wind_speed,
            'timestamp': datetime.now().isoformat(),
            'city': city_name,
            'source': 'Open-Meteo API'
        }
        
        return result
        
    except Exception as e:
        print(f"❌ ERROR: {e}")
        return {
            'temperature': 0,
            'precipitation': 0.0,
            'wind_speed': 0,
            'timestamp': datetime.now().isoformat(),
            'city': 'Unknown',
            'source': 'Error'
        }

def get_city_name(lat, lon):
    """Get city name from coordinates using Open-Meteo Geocoding API"""
    try:
        url = f"https://geocoding-api.open-meteo.com/v1/search?latitude={lat}&longitude={lon}&count=1&language=en&format=json"
        response = requests.get(url, timeout=5)
        data = response.json()
        
        if 'results' in data and data['results']:
            city = data['results'][0]
            name = city.get('name', 'Unknown')
            country = city.get('country', '')
            return f"{name}, {country}" if country else name
    except:
        pass
    
    return f"Lat: {lat}, Lon: {lon}"

if __name__ == "__main__":
    # Test with London
    print("🧪 TESTING WITH LONDON...")
    weather = fetch_weather(51.5074, -0.1278)
    print(f"\n📊 RESULT: {weather['city']} - {weather['temperature']}°C")