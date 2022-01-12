const express = require('express');
const router = express.Router();
const User = require('../models/user');
const upload = require('../middlewares/uploadMulter');
const checkPassword = require('../controllers/comparePassword');


router.post('/signup', upload, function(req, res) {
    
    User.create({ username: req.body.username, password: req.body.password },(err) => {
        
        if (err) {
            res.status(500).send('Error user NOT registered');
        } else {
            res.status(200).send('User added');
        }
    });

});

router.post('/login', upload, function (req, res) {

    const password  = req.body.password;

    User.findOne({ username: req.body.username}, (err, user) => {

        if (err) {
            res.status(500).send('incorrect password or username');               
        } else if (!user) {
            res.status().send('user NOT find')
        } else {
            const result = checkPassword(password, user.password, user)
            res.send(result);
        }

    });    
    
});


module.exports = router