async function sendFileInfo(req, res) {
  res.status(201).send({
    status: 201,
    message: "File is uploaded",
    mimetype: req.files.filesample.mimetype,
  });
}

module.exports = sendFileInfo;
