function isUpload(req, res, next) {
  try {
    if (!req.files) {
      console.log("here");
      throw new Error("No file uploaded");
    } else {
      next();
    }
  } catch (err) {
    next(err.message);
  }
}

module.exports = isUpload;
