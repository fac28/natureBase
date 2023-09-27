const express = require("express");

const deletePost = require("../model/deletePost");

//Variables
const router = express.Router();
const templates = require("../templates");

router.post("/", (req, res) => {
  const item_id = req.body.item_id;
  deletePost(item_id);
  res.redirect("/");
});

module.exports = router;