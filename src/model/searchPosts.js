const db = require("../database/db");

const searchPost = (search) => {
 
    const query = /*sql*/ `
    SELECT * FROM posts
    WHERE username LIKE '%' || ? || '%'
    OR content LIKE '%' || ? || '%'
    OR location LIKE '%' || ? || '%'
    `;

  return db.prepare(query).all(search);
};

module.exports = searchPost;