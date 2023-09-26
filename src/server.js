const express = require("express");
const app = express();
const staticHandler = express.static("public");
const getPosts = require("./model/getPosts.js");

const searchRoutes = require("./routes/search.js");
const addRoutes = require("./routes/add.js");

//const model = require("./model/getPost");
const home = require("./templates");
const templates = require("./templates");

//Middleware
app.use(staticHandler);
app.use("/search", searchRoutes);
app.use("/add", addRoutes);

//Routes
app.get("/", (req, res) => {
  content = getPosts()
    .map(
      (post) =>
        `<img src="${post.picture}"> 
        <p>${post.content}</p>
        <p>${post.username} </p>
        <p>${post.created_at}</p>
        <p>Location: ${post.location}</p>
        <p>Likes: ${post.likes}</p>
        `
    )
    .join("");

  console.log(getPosts());
  const html = templates.home(content);

  res.send(html);
});

module.exports = app;
