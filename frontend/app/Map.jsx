'use client';

import { useEffect, useState } from 'react';

// Default: Rajkot, Gujarat coordinates
const DEFAULT_LAT = 22.3039;
const DEFAULT_LON = 70.8022;

export default function Map({ events = [], centerLat, centerLon }) {
  const [MapComponent, setMapComponent] = useState(null);
  
  // Use provided coordinates or default to Rajkot
  const lat = centerLat || DEFAULT_LAT;
  const lon = centerLon || DEFAULT_LON;

  useEffect(() => {
    const loadMap = async () => {
      const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');
      const L = await import('leaflet');
      
      // Fix default marker icons
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      setMapComponent(() => ({ MapContainer, TileLayer, Marker, Popup }));
    };
    
    loadMap();
  }, []);

  if (!MapComponent) {
    return (
      <div style={{ 
        height: '400px', 
        width: '100%', 
        background: '#f0f0f0', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: '8px'
      }}>
        <p>🗺️ Loading map...</p>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = MapComponent;

  return (
    <MapContainer 
      key={`${lat}-${lon}`}  // 🔥 Force re-render when city changes!
      center={[lat, lon]} 
      zoom={10} 
      style={{ height: '400px', width: '100%', borderRadius: '8px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {events.map((event, i) => (
        <Marker key={i} position={[event.lat, event.lon]}>
          <Popup>
            <strong>📍 {event.description}</strong><br />
            <strong>Severity: {event.severity}%</strong><br />
            <small>{new Date(event.time).toLocaleString()}</small>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}