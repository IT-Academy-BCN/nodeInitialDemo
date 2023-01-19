const express = require('express');
const {
  userNewThrow,
  getThrows,
  deleteThrows,
} = require('../controllers/game.controllers');

const router = express.Router();

router.route('/:id').get(getThrows).post(userNewThrow).delete(deleteThrows);

module.exports = router;
