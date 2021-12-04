// Como la aplicacion es pequeña, todos los route handlers estan en un mismo archivo
const multer = require('multer');
const { imageFilter, storage } = require('../helpers');

const nameAndAge = (req, res) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  res.json({ name: 'Mariano', age: '33', 'req url': `${fullUrl}` });
};

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
  // 'some_pic' is the name of our file input field in the HTML form
  const upload = multer({ storage, fileFilter: imageFilter }).single('some_pic');

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

module.exports = {
  nameAndAge, localDate, uploadImage, noCacheMiddleware,
};
