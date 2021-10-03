const routerUpload = require('express').Router();
const optionsFile = require('../middleware/upload.js');
const uploadEmpty = require("../controller/upload.js");

// upload route
routerUpload.post('/upload', optionsFile, uploadEmpty)



module.exports = routerUpload;