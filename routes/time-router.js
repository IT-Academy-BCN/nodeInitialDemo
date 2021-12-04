const express = require('express');
const { localDate } = require('../handlers/all-handlers');
const router = express.Router();

router.post('/', localDate);

module.exports = router;
