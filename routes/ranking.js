const express = require('express');
const router = express.Router();

router.get('/', require('../controller/ranking/getRanking'));
router.get('/loser', require('../controller/ranking/getLoser'));
router.get('/winner', require('../controller/ranking/getWinner'));

module.exports = router;