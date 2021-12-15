const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./img/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg format allowed!"));
    }
  },
});

module.exports.uploadFile = (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (!req.file && err) {
      res.json({ error: err.message });
    } else {
      res.status(200).json({ result: "File uploaded" });
    }
  });
};
