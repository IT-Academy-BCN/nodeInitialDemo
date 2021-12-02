// Crea un servidor con Express que retorne a una petición GET a la endpoint / user un json con tu nombre, edad y la url desde donde se hace la petición.

// Añade un endpoint /upload para subir al servidor un archivo tipo png, jpg o gif que devuelva un mensaje de error en caso de que la extensión del archivo no coincida con éstas.

const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },

  // By default, multer removes file extensions so let's add them back
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

app.get('/', (req, res) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  res.json({ name: 'Mariano', age: '33', 'req url': `${fullUrl}` });
});

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, '../upload.html'));
});

//--------------------------------------------------

app.post('/upload', (req, res) => {
  // 'profile_pic' is the name of our file input field in the HTML form
  let upload = multer({ storage: storage}).single('some_pic');

  upload(req, res, function(err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields, if there were any

      if (req.fileValidationError) {
          return res.send(req.fileValidationError);
      }
      else if (!req.file) {
          return res.send('Please select an image to upload');
      }
      else if (err instanceof multer.MulterError) {
          return res.send(err);
      }
      else if (err) {
          return res.send(err);
      }

      // Display uploaded image for user validation
      res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
  });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
    