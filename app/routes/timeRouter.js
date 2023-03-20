const express = require("express")
const postTime = require("../controllers/postTime")

const router = express.Router()

router.post("/time", postTime)

module.exports = router
