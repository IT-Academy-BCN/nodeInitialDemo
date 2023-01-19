const express = require('express');
const { getRanking } = require('../controllers/ranking.controllers');

const router = express.Router();

router.route('/').get(getRanking);
router.route('/winner');
router.route('/loser');

module.exports = router;
