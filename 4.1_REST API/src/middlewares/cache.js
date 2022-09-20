const cache = (req, res, next) => {
  res.header("Cache-Control", "no-cache");
  next()
}

module.exports = cache;