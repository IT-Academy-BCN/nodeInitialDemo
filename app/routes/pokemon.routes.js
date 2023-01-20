const express = require('express');
const getPokemon = require('../controllers/pokemon.controllers');

const router = express.Router();

router.route('/:id').get(getPokemon);

module.exports = router;
