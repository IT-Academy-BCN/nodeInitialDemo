const router = require('express').Router();
const controllerUser = require('../controllers/controllerUser');
const chat = (requiure = require('../controllers/controllerMessages'));
const path = require('path');

/* ROUTES */

router.post('/login', controllerUser.createUser);



module.exports = router;
