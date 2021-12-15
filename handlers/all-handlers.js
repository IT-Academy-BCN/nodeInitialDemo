// Como la aplicacion es pequeña, todos los route handlers estan en un mismo archivo
const multer = require('multer');
const { imageFilter, storage } = require('../helpers');

const nameAndAge = (req, res, next) => {
  try {
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    res.json({ name: 'Mariano', age: '33', 'req url': `${fullUrl}` });
  } catch (err) { next(err); }
};

const localDate = (req, res, next) => {
  try {
    const username = req.body.name;
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    const dateObject = new Date().toLocaleString('es-ES', {
      timeZone,
    });
    res.json({ username, dateObject });
  } catch (err) { next(err); }
};

const uploadImage = (req, res, next) => {
  // 'some_pic' is the name of our file input field in the HTML form
  const upload = multer({ storage, fileFilter: imageFilter }).single('some_pic');
  try {
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
  } catch (err) { next(err); }
//
};

const noCacheMiddleware = (req, res, next) => {
  try {
    res.set('Cache-control', 'no-cache');
    console.log('Cache-control-header: ', res.getHeader('Cache-control'));
    next();
  } catch (err) { next(err); }
};

const authentication = (req, res, next) => {
  const authheader = req.headers.authorization;
  try {
    if (!authheader) {
      const err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
    }

    // eslint-disable-next-line new-cap
    const auth = new Buffer.from(
      authheader.split(' ')[1],
      'base64',
    ).toString().split(':');
    const user = auth[0];
    const pass = auth[1];
    if (user === 'admin' && pass === 'password') {
    // If Authorized user
      next();
    } else {
      const err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
    }
  } catch (err) { next(err); }
};

module.exports = {
  nameAndAge, localDate, uploadImage, noCacheMiddleware, authentication,
};
