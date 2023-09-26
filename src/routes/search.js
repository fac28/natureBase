const express = require("express");

//Variables
const router = express.Router();
const templates = require("../templates");

router.get("/", (req, res) => {
  //   res.send(templates.home());
  res.redirect("/");
});

module.exports = router;
