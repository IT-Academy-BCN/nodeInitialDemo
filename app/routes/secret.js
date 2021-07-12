const router = require("express").Router();
const { basicAuth, authErrorHandler } = require("../middlewares/middlewares");

router.use("/", basicAuth);
router.use("/", authErrorHandler);

router.get("/", async (req, res) => {
  try {
    res.status(200).send("You have found many, many secrets");
  } catch (err) {
    console.log(err.message);
  }
});
module.exports = router;
