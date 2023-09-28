const express = require("express");

//Variables
const router = express.Router();
const templates = require("../templates");
const addPost = require("../model/addPost.js");

router.get("/", (req, res) => {
  const submissionPage = templates.form();
  res.send(submissionPage);
});

router.post("/", express.urlencoded({ extended: false }), (req, res) => {
  // const username = req.body.username || "Anonymous";
  // const content = req.body.content;
  // const image = req.body.picture;

  const post = {
    username: req.body.username || "Anonymous",
    content: req.body.content,
    picture: req.body.picture,
    location: req.body.location,
  };
  const errors = {};

  if (!post.content) {
    errors.content = "Please enter a description";
  }
  if (!post.location) {
    errors.location = "Please enter a location";
  }
  if (!post.picture) {
    errors.picture = "Please enter a picture";
  }

  // if there are errors:
  if (Object.keys(errors).length) {
    const body = templates.form(errors, req.body);
    res.status(400).send(body);
  } else {
    addPost(post);
    res.redirect("/..");
  }
});

module.exports = router;
