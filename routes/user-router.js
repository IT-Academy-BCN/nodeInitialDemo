const express = require('express');

const router = express.Router();
const { nameAndAge } = require('../handlers/all-handlers');

router.get('/', nameAndAge);

module.exports = router;
