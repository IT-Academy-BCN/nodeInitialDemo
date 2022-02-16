const { Router } = require('express');
const { playersGet } = require('../controllers/players');

const router = Router();

router.get('/', playersGet);

module.exports = router;