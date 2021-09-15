const router = require('express').Router();
const path = require("path");

router.get('/login', (req, res,next) => {
  res.sendFile(path.resolve(__dirname , '../public/index.html'));
});
router.get('/xat', (req, res,next) => {
  res.sendFile(path.resolve(__dirname , '../public/xat.html'));
});

module.exports = router;
