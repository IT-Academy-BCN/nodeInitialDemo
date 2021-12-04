// Como la aplicacion es pequeña, todos los route handlers estan en un mismo archivo
const multer = require('multer');
const path = require('path');
const helpers = require('../helpers');

// TODO ver como poner esto en helpers
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },

  // By default, multer removes file extensions this will add them back
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

//----------

const localDate = (req, res) => {
  const username = req.body.name;
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const dateObject = new Date().toLocaleString('es-ES', {
    timeZone,
  });
  res.json({ username, dateObject });
  console.log('resCacheHeaderAfterSent: ', res.getHeader('Cache-control'));
};

const uploadImage = (req, res) => {
  console.log('entra al upload post router');// TODO borrar
  // 'some_pic' is the name of our file input field in the HTML form
  const upload = multer({ storage, fileFilter: helpers.imageFilter }).single('some_pic');

  upload(req, res, (err) => {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any

    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } if (!req.file) {
      return res.send('Please select an image to upload');
    } if (err instanceof multer.MulterError) {
      return res.send(err);
    } if (err) {
      return res.send(err);
    }

    // Display uploaded image for user validation
    res.send(`You have uploaded this image: <hr/><img src="${req.file.filename}" width="500"><hr /><a href="./">Upload another image</a>`);
  });
//
};

const noCacheMiddleware = (req, res, next) => {
  res.set('Cache-control', 'no-cache');
  console.log('resCacheHeaderInMiddleware: ', res.getHeader('Cache-control'));
  next();
};

module.exports = { localDate, uploadImage, noCacheMiddleware };
