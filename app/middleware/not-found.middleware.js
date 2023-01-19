function pageNotFound(req, res) {
  res.status(404).send('PAGE NOT FOUND');
}

module.exports = pageNotFound;
