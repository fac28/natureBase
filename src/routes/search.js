const express = require("express");

//Variables
const router = express.Router();
const templates = require("../templates");
const searchPosts = require("../model/searchPosts.js");

router.get("/", (req, res) => {
  const searchPage = templates.searchForm() + templates.home();
  res.send(searchPage);
});

router.post("/", express.urlencoded({ extended: false }), (req, res) => {
  const query = req.body.query;

  const errors = {};

  if (!query) {
    errors.query = "Please enter a search term";
  }

  // if there are errors:
  if (Object.keys(errors).length) {
    const body = templates.searchForm(errors, req.body);
    res.status(400).send(body + templates.home());
  } else {
    // console.log(query);
    // console.log(typeof query);
    // console.log(searchPosts(query));
    // console.log(isNaN(query));

    content = templates.searchedPosts(searchPosts(query));
    res.send(templates.home(content));

    // searchPosts(query); ???
  }
});

module.exports = router;
