const express = require('express');
const api = express.Router();

const register = require('../controller/register.js');

api.post( '/',
             register);

module.exports = api;
