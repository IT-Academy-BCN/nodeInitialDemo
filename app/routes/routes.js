const router = require('express').Router();
//const controllerUser = require('../controller/controllerUser');
//const chat = requiure =require('../controller/controllerMessages')
const path = require("path");


/* ROUTES */


router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname , '../public/index.html'));
});
router.get('/chat', (req, res) => {
 
  res.sendFile(path.resolve(__dirname , '../public/chat.html'));
});


module.exports = router;