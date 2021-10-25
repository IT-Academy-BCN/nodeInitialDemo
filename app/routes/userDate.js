//
const userDate = require('express').Router();
const controlCache = require('../middleware/cacheControl');
const dateUser = require('../controller/dateUser');

userDate.post('/userDate', controlCache, dateUser);



module.exports = userDate;