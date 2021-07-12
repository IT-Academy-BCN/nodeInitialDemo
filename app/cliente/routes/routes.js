const router = require('express').Router();
const path = require("path");


/* ROUTES */


router.get('/login', (req, res,next) => {
    res.sendFile(path.resolve(__dirname , '../public/index.html'));
});
router.get('/chat', (req, res,next) => {
 
  res.sendFile(path.resolve(__dirname , '../public/chat.html'));
});




module.exports = router;
