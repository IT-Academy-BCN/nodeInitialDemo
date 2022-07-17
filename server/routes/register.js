const express = require('express');
const api = express.Router();

const register = require('../controllers/register');
//const auth = require('./middleware/authenticate.js');

api.post('/register', //auth,
             register);

module.exports = api;