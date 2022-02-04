const express = require('express');

const { user, files, time } = require('../controllers');

const router = express.Router();

router.get('/user', user.getUser);
router.post('/upload', files.uploadFile);
router.post('/time', time.getTime);

module.exports = router;