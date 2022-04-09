const express = require('express')

const { user, files, time } = require('../controllers')

const router = express.Router()

router.get('/user', user.getUser)
router.post('/upload', files.uploadFile)
router.post('/time', time.getTime)

// Handling unknown routes to return JSON instead of HTML
router.all('/*', (req, res) => {
  res.json({
    status: false,
    message: 'Unknown route'
  })
});

module.exports = router;
