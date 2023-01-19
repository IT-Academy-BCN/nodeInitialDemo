const multer = require('multer');
const { join, extname } = require('path');

//* VARIABLES FOR MULTER
const PATH = join(__dirname, '..', 'uploads');
const MIMES = ['image/jpeg', 'image/png', 'image/gif'];

//* MULTER FUNCTION
const upload = multer({
  storage: multer.diskStorage({
    destination: PATH,
    filename: (req, file, cb) => {
      const extension = extname(file.originalname);
      const fileName = file.originalname.split(extension)[0];

      cb(null, `${fileName}_${Date.now()}${extension}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (MIMES.includes(file.mimetype)) cb(null, true);
    else cb(new Error(`Only ${MIMES.join(' ')} files are allowed`));
  },
  limits: {
    fieldSize: 1000000,
  },
});

const sendFile = (req, res) => {
  res.status(200).json({ success: true, msg: 'file uploaded', PATH });
};

module.exports = { upload, sendFile };
