const express = require('express');
const api = express.Router();

const login = require('../controllers/login');
//const auth = require('./middleware/authenticate.js');

api.post('/login', //auth,
             login);

module.exports = api;