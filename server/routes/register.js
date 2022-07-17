const express = require('express');
const api = express.Router();

const register = require('../controllers/register');

api.post('/register',
             register);

module.exports = api;