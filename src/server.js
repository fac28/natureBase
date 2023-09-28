const express = require("express");
const app = express();
const staticHandler = express.static("public");
const bodyParser = require("body-parser");

const deleteRoutes = require("./routes/delete");
const searchRoutes = require("./routes/search.js");
const addRoutes = require("./routes/add.js");
const likeRoutes = require("./routes/like.js");

//const model = require("./model/getPost");


const templates = require("./templates");

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(staticHandler);
app.use("/search", searchRoutes);
app.use("/add", addRoutes);
app.use("/like", likeRoutes);
app.use("/delete", deleteRoutes);

//Routes
app.get("/", (req, res) => {
  const html = templates.home();

  res.send(html);
});

module.exports = app;
