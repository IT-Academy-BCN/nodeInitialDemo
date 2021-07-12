const router = require("express").Router();
const user = require("../models/user");

router.get("/", (req, res) => {
  const { protocol, originalUrl: url } = req;
  const host = req.get("host");
  user.url = `${protocol}://${host}${url}`;
  res.send(user);
});

module.exports = router;
