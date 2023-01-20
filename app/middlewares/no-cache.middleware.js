function noCache(req, res, next) {
  res.header('Cache-control', 'no-cache');
  next();
}
module.exports = noCache;
