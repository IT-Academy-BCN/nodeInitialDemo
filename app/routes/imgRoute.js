const express = require("express")
const { postImg } = require("../controllers/postImg")

const router = express.Router()

router.post("/img", postImg)

module.exports = router
