const express = require("express");

//Variables
const router = express.Router();
const templates = require("../templates");
const searchPosts = require("../model/searchPosts.js");


router.get("/", (req, res) => {
 
  res.send(templates.searchPage());
});

router.post("/", express.urlencoded({ extended: false }), (req, res) => {
  const query = req.body.query;

  const errors = {};

  if (!query) {
    errors.query = "Please enter a search term";
  }

  // if there are errors:
  if (Object.keys(errors).length) {
    const body = templates.searchPage(errors, req.body);
    res.status(400).send(body);
  } else {
    const content = templates.displayPosts(searchPosts(query));
    res.send(templates.home(content));
  }
});

module.exports = router;
