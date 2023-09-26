const express = require("express");

//Variables
const router = express.Router();
const templates = require("../templates");

router.get("/", (req, res) => {
  res.send(templates.home());
});

router.post("/", express.urlencoded(), (req, res) => {
  const { username, content, picture, location } = req.body;
  const newPost = { username, content, picture, location };

  res.redirect("/");
});

module.exports = router;
