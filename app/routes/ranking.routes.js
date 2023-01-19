const express = require('express');

const router = express.Router();

router.route('/');
router.route('/winner');
router.route('/loser');

module.exports = router;
