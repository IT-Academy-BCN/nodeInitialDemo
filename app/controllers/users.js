const user = require("../models/user");

async function sendUserInfo(req, res) {
  const { protocol, originalUrl: url } = req;
  const host = req.get("host");
  user.url = `${protocol}://${host}${url}`;
  res.send(user);
}

module.exports = sendUserInfo;
