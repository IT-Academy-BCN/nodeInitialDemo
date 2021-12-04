const express = require('express');
const path = require('path');
const { uploadImage } = require('../handlers/all-handlers');
const router = express.Router();

// TODO ver que haces con el storage este

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/upload.html'));
});

router.post('/', uploadImage);

module.exports = router;
