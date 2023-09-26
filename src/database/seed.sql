BEGIN;

INSERT INTO posts VALUES
(1, 'Nich', 'Saw this and thought it was pretty. 
London at it’s best!', 'https://images.unsplash.com/photo-1504926377097-15f5d473cfe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXJiYW4lMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1600&q=60', 'Finsbury Park', 5, 'Apr 20th, 2022'),
(2, 'Laurie', 'Only in Hackney!', 'https://images.unsplash.com/photo-1556012027-22c2bc773a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80', 'Hackney', 10, 'Jun 12th, 2023'),
(3, 'Elena', 'What a view, what a day!', 'https://images.unsplash.com/photo-1622638388171-2b369cb506af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80', 'Hamstead Heath', 20, 'Jan 5th, 2023')

ON CONFLICT DO NOTHING;
COMMIT;