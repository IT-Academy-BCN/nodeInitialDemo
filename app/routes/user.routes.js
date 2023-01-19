const express = require('express');
const {
  createUser,
  getUsers,
  modifyUser,
} = require('../controllers/user.controllers');

const router = express.Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').patch(modifyUser);

module.exports = router;
