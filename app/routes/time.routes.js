const express = require('express');

const getTime = require('../controllers/time.controllers');

const router = express.Router();

router.route('/').post(getTime);

module.exports = router;
