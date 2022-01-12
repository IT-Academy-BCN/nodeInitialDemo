const express = require('express');
const router = express.Router();
const User = require('../models/user');
const upload = require('../middlewares/uploadMulter');
const checkPassword = require('../controllers/comparePassword');
const service = require('../services/createToken');
const auth = require('../middlewares/auth');


router.post('/signup', upload, function(req, res) {
    
    User.create({ username: req.body.username, password: req.body.password },(err, user) => {
        
        if (err) {
            res.status(500).send('Error user NOT registered');
        }
            res.status(200).send({ token: service.createToken(user) })
        
    });

});

router.post('/login', upload, auth, function (req, res) {

    const password  = req.body.password;

    User.findOne({ username: req.body.username}, (err, user) => {

        if (err) {
            res.status(500).send('incorrect password or username');               
        } else if (!user) {
            res.status().send('user NOT find')
        } else {
            const result = checkPassword(password, user.password, user);
            res.send(result);
        }

    });    
    
});


module.exports = router;