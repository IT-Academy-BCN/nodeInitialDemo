const express = require('express');

const getTime = require('../controllers/time.controllers');
const noCache = require('../middlewares/no-cache.middleware');

const router = express.Router();

router.route('/').post(noCache, getTime);

module.exports = router;
