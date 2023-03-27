const getUsers = (req, res) => {
  res.send([{ name: "David", age: 37, pass: 123 }, `Request url: ${req.url}`])
}

module.exports = {
  getUsers,
}
