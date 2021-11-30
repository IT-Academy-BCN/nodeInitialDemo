const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

router.get('/', (req, res) => {
    res.send('Hola, serve ok')
});

router.get('/user', userController);

module.exports = router
