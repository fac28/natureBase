const db = require("../database/db");

const updateLike = (user_id) => {
  const update_query =
    /*sql*/ "UPDATE posts SET likes = likes + 1 WHERE id = ?";

  try {
    db.prepare(update_query).run(user_id);
  } catch (error) {
    console.error("Error updating likes:", error.message);
    throw error;
  }
};

module.exports = updateLike;
