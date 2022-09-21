const express = require('express');
const router = express.Router();

const pokeApi = require('../controllers/pokemon');

router.get('/pokemon/:id',pokeApi);

module.exports = router;