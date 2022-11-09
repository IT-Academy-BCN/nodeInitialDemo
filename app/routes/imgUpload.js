const express = require('express');
const router = express.Router()

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

let fileFilter = function (req, file, cb) {
 
  if (file.mimetype === 'image/jpg' | file.mimetype === 'image/png' | file.mimetype === 'image/gif') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
})

router.get('/', function (req, res) {
  res.render('index.ejs');
});

router.post('/', upload.single('file'), (req, res) => {
  try {
    console.log(req.file);
    res.status(201).send(`Document ${req.file.originalname} guardat correctament`)
  } catch (err) {
    console.log(err)
    res.status(400).send(`Document no enviat, prova amb jpg, png o gif`)
  }
})

module.exports = router