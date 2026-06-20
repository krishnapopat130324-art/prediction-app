'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { PredictionMap, Dashboard, Alerts, CitySearch } from './components';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState(null);
  const [cityPrediction, setCityPrediction] = useState(null);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:8000/events');
      setEvents(res.data.events || []);
    } catch (err) {
      console.error('Failed to fetch events:', err);
    }
    setLoading(false);
  };

  const handleCitySelect = (cityData) => {
    setCurrentCity({
      name: cityData.name,
      country: cityData.country,
      lat: cityData.lat,
      lon: cityData.lon
    });
    setCityPrediction(cityData);
  };

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 30000);
    return () => clearInterval(interval);
  }, []);

  const cityName = currentCity?.name || 'Rajkot';

  const filteredEvents = events.filter(event => {
    if (!currentCity) return true;
    return event.description.toLowerCase().includes(currentCity.name.toLowerCase());
  });

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '5px' }}>🌍 Global Prediction Dashboard</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>Search any city in the world! 🌏</p>
      
      {/* 🔥 SEARCH BOX ONLY - No duplicate info box! */}
      <CitySearch onCitySelect={handleCitySelect} />
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginTop: '20px' }}>
        <div>
          {/* 🔥 MAP - Changes with city */}
          <PredictionMap events={filteredEvents} cityData={currentCity} />
          <div style={{ marginTop: '20px' }}>
            {/* 🔥 DASHBOARD - Shows prediction when you click the button */}
            <Dashboard cityData={currentCity} />
          </div>
        </div>
        <div>
          {/* 🔥 ALERTS - Changes with city */}
          <Alerts events={filteredEvents} cityName={cityName} />
          <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <h3>📋 Recent Events - {cityName}</h3>
            {loading ? (
              <p>Loading...</p>
            ) : filteredEvents.length === 0 ? (
              <p>No events for {cityName} yet. Click "Get {cityName} Prediction" to create one!</p>
            ) : (
              filteredEvents.slice(0, 5).map((e, i) => (
                <div key={i} style={{ padding: '5px 0', borderBottom: '1px solid #eee' }}>
                  {e.description} - {e.severity}%
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}