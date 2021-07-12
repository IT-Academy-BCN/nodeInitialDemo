async function checkMimeType(req, res, next) {
  try {
    const mime = req.files.filesample.mimetype;
    if (mime === "image/png" || mime === "image/jpeg" || mime === "image/gif") {
      next();
    } else throw new Error("Wrong file type of file");
  } catch (err) {
    next(err.message);
  }
}

module.exports = checkMimeType;
