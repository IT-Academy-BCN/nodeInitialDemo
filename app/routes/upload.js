const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadcontroller');

router.post('/upload', uploadController);

module.exports = router
