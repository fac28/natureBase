
const db = require("../database/db");

const getPosts = () => {
  const select_posts = /*sql*/ `
    SELECT id, username, content, 
    picture, location, likes, 
    created_at
    FROM posts
  `;

  try {
    return db.prepare(select_posts).all();
  } catch {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
};

module.exports = getPosts;

