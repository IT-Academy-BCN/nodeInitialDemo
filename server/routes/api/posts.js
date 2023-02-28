const express = require("express");
const mongodb = require("mongodb");
const users = require("../../users/user");

const router = express.Router();

// GET posts
router.get("/", (req, res) => {
  res.send(users);
});

//ADD posts

//DELETE posts

module.exports = router;
