const path = require("path");

async function sendFileInfo(req, res) {
  res.status(201).json({
    status: 201,
    message: "File is uploaded",
    mimetype: req.files.filesample.mimetype,
  });
}

async function uploadFileToServer(req, res, next) {
  const file = req.files.filesample;
  const filePath = path.join(__dirname, "../../public/uploads", file.name);
  file.mv(filePath, (err) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: "There was an error while uploading the file.",
      });
    } else {
      next();
    }
  });
}

module.exports = { sendFileInfo, uploadFileToServer };
