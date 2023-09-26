BEGIN;

INSERT INTO posts VALUES
(1, 'Nich', 'Saw this and thought it was pretty. 
London at it’s best!', 'https://images.unsplash.com/photo-1504926377097-15f5d473cfe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXJiYW4lMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1600&q=60', 'Finsbury Park', 5, 'Apr 20th, 2022'),
(2, 'Laurie', 'Only in Hackney!', 'https://unsplash.com/photos/EokV3sIoQlo', 'Hackney', 10, 'Jun 12th, 2023'),
(3, 'Elena', 'What a view, what a day!', 'https://unsplash.com/photos/c9AZnEtLV0w', 'Hamstead Heath', 20, 'Jan 5th, 2023')

ON CONFLICT DO NOTHING;
COMMIT;