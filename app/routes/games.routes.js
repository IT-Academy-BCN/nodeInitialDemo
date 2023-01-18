const express = require('express');

const {
  getThrows,
  playerNewThrow,
  deleteThrows,
} = require('../controllers/game.controller');

const router = express.Router();

router.route('/:id').get(getThrows).post(playerNewThrow).delete(deleteThrows);

module.exports = router;
