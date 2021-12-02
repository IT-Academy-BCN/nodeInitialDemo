const router = require('express').Router();

const apiUsers = require('./users');
const apiMessages = require('./messages');
const apiLogin = require('./login');


router.use('/users', apiUsers);
router.use('/messages', apiMessages);
router.use('/login', apiLogin);


module.exports = router;