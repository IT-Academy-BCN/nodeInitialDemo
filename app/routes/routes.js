const router = require('express').Router();
const controllerAuth = require('../controllers/auth');
const controllerUser = require('../controllers/controllerUser');
const path = require('path');

/* ROUTES */
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

router.post('/', controllerAuth);

router.get('/chat', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/chat.html'));
});

module.exports = router;
