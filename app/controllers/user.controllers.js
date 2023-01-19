function getUser(req, res) {
  res.status(200).json({
    user: 'Gabriel Valiente',
    age: 30,
    url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
  });
}

module.exports = getUser;
