const express = require("express");
const app = express();
const staticHandler = express.static("public");

//const model = require("./model/getPost");
const Layout = require("./templates");

//Importing functions to test
const getPosts = require("./model/getPosts");
const addPost = require("./model/addPost");

//Middleware
app.use(staticHandler);

const newPost = {
  username: "nich",
  content: "aaaa",
  picture: "a/file/path",
  location: "london",
  likes: 5,
};

//Routes
app.get("/", (req, res) => {
  res.send(Layout());
  addPost(newPost);
  console.log(getPosts());
  
});

module.exports = app;
