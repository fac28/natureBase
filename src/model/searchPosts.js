const db = require("../database/db");

const searchPost = (search) => {
  const query = /*sql*/ `
  SELECT * FROM posts
  WHERE username, content, location 
  LIKE '%' || ? || '%'
  `;

  return db.prepare(query).all(search);
};

module.exports = searchPost;