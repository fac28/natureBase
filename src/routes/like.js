const express = require("express");

const updateLike = require("../model/updateLike");

//Variables
const router = express.Router();
const templates = require("../templates");

router.post("/", (req, res) => {
  const item_id = req.body.item_id;
  updateLike(item_id);
  res.redirect("/");
});

module.exports = router;
