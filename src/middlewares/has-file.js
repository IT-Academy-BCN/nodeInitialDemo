function isUpload(req, res, next) {
  // Check if any file has been uploaded, if there's a file call next middleware, if not call error handler.
  try {
    if (!req.files) {
      throw new Error("No file uploaded");
    } else {
      next();
    }
  } catch (err) {
    next(err.message);
  }
}

module.exports = isUpload;
