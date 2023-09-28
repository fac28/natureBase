const express = require("express");

//Variables
const router = express.Router();

router.get("/", (req, res) => {
  //   res.send(templates.home());
  res.redirect("/");
});

module.exports = router;
