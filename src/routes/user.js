'use strict';
const express = require('express');

// Importar Controller
const getUser = require('../controllers/user.js');

//Crear objecte Router
const router = express.Router();

//Crear Endpoint
router.get('/user', getUser);

//Exportar Router 
module.exports = router;



