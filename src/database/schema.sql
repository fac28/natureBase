BEGIN;

CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    content TEXT,
    picture TEXT,
    post_location TEXT,
    likes INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP  
);

COMMIT;