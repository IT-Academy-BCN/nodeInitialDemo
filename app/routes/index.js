const users = require("./users");
const upload = require("./upload");
const secret = require("./secret");
const register = require("./register");

const router = {
  users,
  upload,
  secret,
  register,
};

module.exports = router;
