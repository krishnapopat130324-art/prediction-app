class DisruptionPredictor:
    """
    AI Prediction Model for Rajkot, Gujarat
    Calculates risk based on weather conditions
    """
    
    def __init__(self):
        self.trained = False
        print("🤖 Rajkot Predictor initialized")
    
    def predict(self, weather_data):
        """
        Calculate risk score (0-100) based on weather
        
        Rajkot specific thresholds:
        - Summer: >40°C = HIGH risk
        - Monsoon: >20mm rain = HIGH risk
        - Wind: >40 km/h = HIGH risk
        """
        severity = 20  # Base risk
        
        temperature = weather_data.get('temperature', 0)
        precipitation = weather_data.get('precipitation', 0)
        wind_speed = weather_data.get('wind_speed', 0)
        
        # Heat risk (Rajkot is hot!)
        if temperature > 40:
            severity += 40  # Extreme heat
        elif temperature > 35:
            severity += 25  # Very hot
        elif temperature > 30:
            severity += 10  # Hot
        
        # Rain risk
        if precipitation > 20:
            severity += 35  # Heavy rain
        elif precipitation > 10:
            severity += 20  # Moderate rain
        elif precipitation > 0:
            severity += 10  # Light rain
        
        # Wind risk
        if wind_speed > 40:
            severity += 20  # Strong wind
        elif wind_speed > 30:
            severity += 10  # Moderate wind
        
        # Rajkot specific: Heat + Humidity combo
        if temperature > 35 and precipitation > 5:
            severity += 15  # Hot and humid = uncomfortable
        
        return min(severity, 100)  # Cap at 100

# Create global instance
predictor = DisruptionPredictor()

# Test with Rajkot weather
if __name__ == "__main__":
    test_weather = {
        'temperature': 37.0,
        'precipitation': 0.0,
        'wind_speed': 15.0
    }
    score = predictor.predict(test_weather)
    print(f"Test Rajkot weather: {test_weather}")
    print(f"Risk Score: {score}%")
    print(f"Risk Level: {'HIGH' if score > 60 else 'MEDIUM' if score > 30 else 'LOW'}")