const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./src/uploads");
    },
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
      if (
          fileExtension == ".png" ||
          fileExtension == ".jpg" ||
          fileExtension == ".gif"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png .jpg and .gif format allowed!"));
      }
    }
  });

  module.exports = {
      upload
  }