const express = require('express');
const {
  getRanking,
  getWinner,
  getLoser,
} = require('../controllers/ranking.controllers');

const router = express.Router();

router.route('/').get(getRanking);
router.route('/winner').get(getWinner);
router.route('/loser').get(getLoser);

module.exports = router;
