const db = require("../database/db");

const searchPost = (search) => {
  let query;
  let queryParams;

  if (Number.isInteger(search)) {
    //Handle interger search
    query = /*sql*/ `
      SELECT * 
      FROM posts
      WHERE likes = ?
    `;
    queryParams = [search];
  } else if (typeof search === "string") {
    //Handle string search
    query = /*sql*/ `
      SELECT * FROM posts
      WHERE username LIKE '%' || ? || '%'
      OR content LIKE '%' || ? || '%'
      OR location LIKE '%' || ? || '%'
      `;
    queryParams = [search, search, search];
  } else {
    throw new Error("Invalid search parameter type");
  }

  return db.prepare(query).all(...queryParams);
};

module.exports = searchPost;
