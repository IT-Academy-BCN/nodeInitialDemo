const router = require('express').Router();
const controllerUser = require('../controllers/userController');

router.post('/login', controllerUser.createUser);

module.exports = router;
