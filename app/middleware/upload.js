const path = require("path");
const multer = require("multer");

// Destination of the archive upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './app/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname);
  }
});

//* options of multer and are passed as objects
const optionsFile = (multer({
  storage: storage,
  dest: path.join(__dirname, './app/uploads'),
  limits: {
    fileSize: 20000000
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|svg/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb('Error: La extension del archivo no es correcta. Tiene que ser jpg, jpeg, png o gif');
  }
}).single('file'));


module.exports = optionsFile;