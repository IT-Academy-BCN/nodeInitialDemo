const router = require("express").Router();
const getCurrentTime = require("../helpers/get-current-time");

router.post("/", async (req, res) => {
  const currentTime = await getCurrentTime();
  res.send(JSON.stringify(currentTime));
});

module.exports = router;
