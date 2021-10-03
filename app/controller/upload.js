//
const uploadEmpty = (req, res, next) => {
  if (!req.file) {
    return next(console.error('No file. Attach a correct document'))
  }
  res
    .status(200)
    .send(req.file)
};

module.exports = uploadEmpty;