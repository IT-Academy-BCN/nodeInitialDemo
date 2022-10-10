const express = require('express');
const api = express.Router();

const register = require('../controllers/register.js');

api.post('/',register);

module.exports = api;