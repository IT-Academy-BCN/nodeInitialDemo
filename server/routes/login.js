const express = require('express');
const api = express.Router();

const login = require('../controllers/login.js');
const auth = require('../middleware/authenticate.js');

api.post('/', auth,
             login);

module.exports = api;