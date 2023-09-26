BEGIN;

CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    content TEXT,
    picture TEXT,
    location TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    
)