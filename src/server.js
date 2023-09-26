const express = require("express");
const app= express();
const staticHandler = express.static("public")

//const model = require("./model/getPost");
const Layout = require('./templates')

//Middleware
app.use(staticHandler);

//Routes
app.get('/', (req, res) => {
  res.send(Layout())
})

module.exports = app;