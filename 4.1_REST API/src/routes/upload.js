const express = require('express');
const router = express.Router();

//Requerir Controller
const uploadImage = require('../controllers/upload.js')

//Crear endpoint
router.post('/upload', uploadImage);

module.exports = router;