const express = require("express");

//Variables
const router = express.Router();
const templates = require("../templates");
const addPost = require("../model/addPost.js")

router.get("/", (req, res) => {
  const submissionPage = templates.submissionForm() + templates.home();
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
      location: req.body.location
    }
    const errors = {};

    if (!post.content) {
      errors.content = "Please enter a description";
    }

  // if there are errors:
  if (Object.keys(errors).length) {
      const body = form(errors, req.body);
      res.status(400).send(body);
  } else {
      addPost(post)
      res.redirect("/..");
  }
})


module.exports = router;
