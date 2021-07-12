function mediaError(err, req, res, next) {
  if (err === "Wrong file type of file") {
    res.status(415).send("This type of file is not accepted");
  } else if (err === "No file uploaded") {
    res.status(400).send("No file uploaded, stop messing around");
  } else {
    res.status(400).send("I dunno");
  }
}

module.exports = mediaError;
