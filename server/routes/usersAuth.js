const express = require('express');
const api = express.Router();
const register = require('../controllers/register.js');
const signIn = require('../controllers/signin.js');
const verifyJWT = require('../middleware/verifyJWT.js');



api.post('/register', register);
api.post('/sign-in', signIn);
api.post('/auth', verifyJWT, (req, res) => {

    try {
        res.status(201).send({
            status: "success"
        });

     } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
}); 

module.exports = api;












