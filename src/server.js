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

  const html = templates.home();

  res.send(html);
});


module.exports = app;
