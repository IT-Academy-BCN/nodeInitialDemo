const express = require('express');
const { localDate } = require('../handlers/all-handlers');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Autenticado!');
});
router.post('/', localDate);

module.exports = router;
