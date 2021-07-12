const express = require("express");
const cors = require("cors");
const { cacheControl } = require("../middlewares/middlewares");
const registerUser = require("../controllers/register");

const router = express.Router();

// Accept CORS
router.use(cors());
// Parse the body
router.use(express.json());
// Set Cache Control
router.use(cacheControl);
router.post("/", registerUser);

module.exports = router;
