function mediaError(err, req, res, next) {
  if (err === "Wrong file type of file") {
    res.status(415).send("This type of file is not accepted");
    next();
  } else if (err === "No file uploaded") {
    res.status(400).send("No file uploaded, stop messing around");
    next();
  } else {
    res.status(400).send("I dunno");
    next();
  }
}

module.exports = mediaError;
