const db = require("../database/db");

const deletePost = (user_id) => {
  const query =
    /*sql*/ `DELETE FROM posts WHERE id = ?`;

  try {
    db.prepare(query).run(user_id);
  } catch (error) {
    console.error("Error deleting post:", error.message);
    throw error;
  }
};

module.exports = deletePost;
