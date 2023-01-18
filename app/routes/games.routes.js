const express = require('express');

const {
  getThrows,
  playerNewThrow,
  deleteThrows,
} = require('../controllers/game.controllers');

const router = express.Router();

router.route('/:id').get(getThrows).post(playerNewThrow).delete(deleteThrows);

module.exports = router;
