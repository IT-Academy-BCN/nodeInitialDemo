'use strict';
const res = require('express/lib/response');
//const express = require('express');
const multer = require('multer');
const path = require('path');

const imageFilter = require('../middlewares/imageFilter.js');

//Configurar Multer
let storage = multer.diskStorage({ //Permite decidir dónde se guardará el archivo que subamos.
  destination:'./uploads',
  fileName: (req, file, cb) => {
    cb(null, file.originalname + '-' + Date.now());
  }
});

// Inicializar multer
const upload = multer ({
  storage: storage,
  limits: {fileSize: 3000000},
  fileFilter:function(req, file, cb){
  }
}).single('imagen');

// Crear Controller
const uploadImage = (req, res) => {

  try {
    upload(req, res,(err) => {
  if(err){
    return res.status(415).send({
      status: 'error',
      message: err.message
    });
  } else if(!req.file){
    return res.status(400).send({
      status: 'error',
      message: 'error 400: file  not found'});
    } else {
      return res.status(200).send({
        message:'File Upload Successfully',
        file: req.file
      });
    };
});
  } catch (err) {
    res.status(500).send({
      status: 'error',
      message: 'Error 500- Error server'
    });
  }
};

module.exports = uploadImage;
