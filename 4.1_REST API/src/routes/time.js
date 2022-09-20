const express = require('express');
const router = express.Router();

const getTime = require('../controllers/time.js');
const cors = require('cors');
const cache = require('../middlewares/cache.js');
const authe = require('../middlewares/authe.js');

router.post('/time', 
    cors(), 
    cache, 
    authe, 
    getTime);

module.exports = router;

