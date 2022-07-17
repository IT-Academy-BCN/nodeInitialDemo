const express = require('express');
const api = express.Router();

const signin = require('../controllers/signin');

api.post('/signin',
             signin);

module.exports = api;