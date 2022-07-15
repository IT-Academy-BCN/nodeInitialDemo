const express = require('express');
const api = express.Router();
const signup = require('../controllers/signup.js');


api.post('/signup', signup);
module.exports = api;

