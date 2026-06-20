import sqlite3
from datetime import datetime
from geopy.distance import geodesic

DB_NAME = 'predictions.db'

def get_db():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Create fresh database"""
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat REAL,
            lon REAL,
            severity REAL,
            event_type TEXT,
            predicted_time TEXT,
            description TEXT,
            temperature REAL,
            source TEXT
        )
    ''')
    conn.commit()
    conn.close()
    print("✅ Fresh database created!")

def save_event(lat, lon, severity, event_type, description, temperature=None, source=None):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        """INSERT INTO events 
           (lat, lon, severity, event_type, predicted_time, description, temperature, source) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
        (lat, lon, severity, event_type, datetime.now().isoformat(), description, temperature, source)
    )
    conn.commit()
    conn.close()

def get_recent_events(limit=10):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM events ORDER BY id DESC LIMIT ?", (limit,))
    rows = cursor.fetchall()
    conn.close()
    return rows

def find_nearby_events(lat, lon, radius_km=5):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM events")
    rows = cursor.fetchall()
    conn.close()
    
    nearby = []
    for row in rows:
        distance = geodesic((lat, lon), (row['lat'], row['lon'])).km
        if distance <= radius_km:
            nearby.append({
                'event': dict(row),
                'distance': round(distance, 2)
            })
    return sorted(nearby, key=lambda x: x['distance'])

# Initialize fresh database
init_db()