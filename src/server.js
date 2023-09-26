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

//Routes
app.get("/", (req, res) => {
  res.send(Layout());  
});

module.exports = app;
