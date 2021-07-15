const express = require('express')
const userController = require('../controller/user.controller')
const router = express.Router();

router.get('/user', userController.createUser)
router.post('/postUser', userController.postUser)

module.exports = router