const express = require("express");
const app = express();
const staticHandler = express.static("public");

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
  const content = "<p>'test'</p>";
  const html = templates.home({ content });
  res.send(html);
});

module.exports = app;
