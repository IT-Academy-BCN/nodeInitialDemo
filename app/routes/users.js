const router = require("express").Router();
const sendUserInfo = require("../controllers/users");

router.get("/", sendUserInfo);

module.exports = router;
