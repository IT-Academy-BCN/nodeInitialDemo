const router = require('express').Router();
const controllerAuth = require('../controllers/auth');
const controllerUser = require('../controllers/controllerUser')
const path = require('path');

/* ROUTES */
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

router.get('/chat', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/chat.html'));
});

//router.get('/chat',controllerUser.createUser)

router.post('/', controllerAuth);

module.exports = router;
