const express = require('express');
const { upload, sendFile } = require('../controllers/upload.controller');

const router = express.Router();

router.route('/').post(upload.single('image'), sendFile);

module.exports = router;
