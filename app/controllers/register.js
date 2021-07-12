const getCurrentTime = require("../helpers/get-current-time");

async function registerUser(req, res) {
  const currentTime = await getCurrentTime();
  res.json(currentTime);
}

module.exports = registerUser;
