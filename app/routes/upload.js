const controllers = require('../controllers/FileController');
const express = require('express');
const router=  express.Router();


router.post('/upload', controllers.uploadFile);


module.exports = router;