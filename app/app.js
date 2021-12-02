/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const multer = require('multer');
const helpers = require('../helpers');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },

  // By default, multer removes file extensions this will add them back
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

app.use(express.static('uploads'));

app.get('/', (req, res) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  res.json({ name: 'Mariano', age: '33', 'req url': `${fullUrl}` });
});

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, '../upload.html'));
});

//--------------------------------------------------

app.post('/upload', (req, res) => {
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
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
