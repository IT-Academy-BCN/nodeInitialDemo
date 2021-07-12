const router = require("express").Router();
const { basicAuth, authErrorHandler } = require("../middlewares/middlewares");
const sendSecret = require("../controllers/secret");

router.use("/", basicAuth);
router.use("/", authErrorHandler);

router.get("/", sendSecret);
module.exports = router;
