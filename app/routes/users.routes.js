const express = require('express');
const {
  getUsers,
  createUser,
  modifyPlayer,
} = require('../controllers/user.controllers');

const router = express.Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').patch(modifyPlayer);

module.exports = router;
