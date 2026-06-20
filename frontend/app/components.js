'use client';

import { useState } from 'react';
import axios from 'axios';
import Map from './Map';
import 'leaflet/dist/leaflet.css';

// ============================================
// COMPONENT 1: City Search Box
// ============================================
export function CitySearch({ onCitySelect }) {
  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState(false);

  const searchCity = async () => {
    if (!cityName.trim()) {
      alert('Please enter a city name');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
      );
      
      const results = response.data.results;
      if (!results || results.length === 0) {
        alert(`City "${cityName}" not found! Please try again.`);
        setLoading(false);
        return;
      }

      const city = results[0];
      const lat = city.latitude;
      const lon = city.longitude;
      const name = city.name;
      const country = city.country;

      const predResponse = await axios.get(
        `http://localhost:8000/predict?lat=${lat}&lon=${lon}`
      );

      onCitySelect({
        name: name,
        country: country,
        lat: lat,
        lon: lon,
        weather: predResponse.data.weather,
        prediction: predResponse.data.prediction
      });

    } catch (err) {
      console.error('Error:', err);
      alert('Failed to find city. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f8ff', 
      borderRadius: '12px',
      marginBottom: '20px',
      border: '2px solid #0070f3',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h3>🌍 Search Any City in the World</h3>
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <input
          type="text"
          placeholder="🔍 Type city name (e.g., Mumbai, London, Tokyo)"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && searchCity()}
          style={{
            flex: 1,
            padding: '14px 18px',
            border: '2px solid #ccc',
            borderRadius: '8px',
            fontSize: '16px',
            minWidth: '200px'
          }}
        />
        <button
          onClick={searchCity}
          disabled={loading}
          style={{
            padding: '14px 32px',
            backgroundColor: loading ? '#ccc' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = '#005bb5')}
          onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = '#0070f3')}
        >
          {loading ? '🔍 Searching...' : '🔍 Search'}
        </button>
      </div>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
        💡 Try: Mumbai, London, Tokyo, New York, Sydney, Dubai, Paris, Berlin...
      </p>
    </div>
  );
}

// ============================================
// COMPONENT 2: Prediction Map
// ============================================
export function PredictionMap({ events = [], cityData }) {
  return (
    <Map 
      events={events} 
      centerLat={cityData?.lat} 
      centerLon={cityData?.lon} 
    />
  );
}

// ============================================
// COMPONENT 3: Dashboard (FIXED - Shows correct city!)
// ============================================
export function Dashboard({ cityData }) {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPrediction = async () => {
    setLoading(true);
    try {
      const lat = cityData?.lat || 22.3039;
      const lon = cityData?.lon || 70.8022;
      const res = await axios.get(`http://localhost:8000/predict?lat=${lat}&lon=${lon}`);
      setPrediction(res.data);
    } catch (err) {
      console.error('Error fetching prediction:', err);
      alert('❌ Failed to get prediction. Make sure backend is running on port 8000');
    }
    setLoading(false);
  };

  const cityName = cityData?.name || 'Rajkot';

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>📊 {cityName} - Real-Time Prediction</h2>
      <button 
        onClick={getPrediction} 
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ccc' : '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: '16px'
        }}
      >
        {loading ? 'Predicting...' : `Get ${cityName} Prediction`}
      </button>
      {prediction && (
        <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
          <p><strong>📍 Location:</strong> {prediction.location.city}</p>
          <p><strong>Risk Level:</strong> {' '}
            <span style={{
              color: prediction.prediction.risk_level === 'HIGH' ? 'red' : 
                     prediction.prediction.risk_level === 'MEDIUM' ? 'orange' : 'green',
              fontWeight: 'bold'
            }}>
              {prediction.prediction.risk_level}
            </span>
          </p>
          <p><strong>Severity:</strong> {prediction.prediction.severity}%</p>
          <p><strong>Weather:</strong> {prediction.weather.temperature}°C, {prediction.weather.precipitation}mm rain</p>
          <p><strong>Wind Speed:</strong> {prediction.weather.wind_speed} km/h</p>
          <p><strong>Time:</strong> {new Date(prediction.prediction.timestamp).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

// ============================================
// COMPONENT 4: Alerts
// ============================================
export function Alerts({ events = [], cityName = 'Rajkot' }) {
  const highRisk = events.filter(e => e.severity > 60);
  
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid red', 
      borderRadius: '10px', 
      backgroundColor: '#fff5f5',
      minHeight: '100px'
    }}>
      <h3>🚨 {cityName} Alerts ({highRisk.length})</h3>
      {highRisk.length === 0 ? (
        <p>✅ No active alerts in {cityName}</p>
      ) : (
        highRisk.map((e, i) => (
          <div key={i} style={{ 
            padding: '10px', 
            borderBottom: '1px solid #ddd',
            backgroundColor: i % 2 === 0 ? '#ffe0e0' : '#fff0f0'
          }}>
            <strong>Severity: {e.severity}%</strong> - {e.description}
          </div>
        ))
      )}
    </div>
  );
}