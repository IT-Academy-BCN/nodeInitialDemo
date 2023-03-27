const postTime = (req, res) => {
  const day = new Date()
  res.send(day)
}

module.exports = postTime
