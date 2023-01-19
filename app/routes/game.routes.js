const express = require('express');
const { userNewThrow, getThrows } = require('../controllers/game.controllers');

const router = express.Router();

router.route('/:id').get(getThrows).post(userNewThrow);

module.exports = router;
