const express = require('express');
const router = express.Router();
const cors = require('cors');

const timeController = require('../controllers/timeController');
const cacheControl = require('../middleware/cachecontrol');
const auth = require('../middleware/auth');

router.post('/time', 
[ cacheControl, 
  cors(),
  auth
],
 timeController);

module.exports = router
