const users = require("../../server/users/user.json")

const getUsers = (req, res) => {
  res.send([users, `Request url: ${req.url}`])
}

module.exports = {
  getUsers,
}
