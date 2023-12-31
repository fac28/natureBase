const db = require("../database/db");

const addPost = (post) => {
  const insert_post = /*sql*/ `
  INSERT INTO posts (username, content, picture, location)
  VALUES (?, ?, ?, ?);
  `;
  try {
    return db
      .prepare(insert_post)
      .run(
        post.username,
        post.content,
        post.picture,
        post.location,
      );
  } catch (error) {
    console.error("Error creating posts:", error.message);
    throw error;
  }
};

module.exports = addPost;
