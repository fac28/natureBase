const express = require("express");

//Variables
const router = express.Router();
const templates = require("../templates");

router.get("/", (req, res) => {
  const submissionPage = templates.submissionForm() + templates.home();
  res.send(submissionPage);
});




module.exports = router;
