const express = require('express');
const api = express.Router();

//middleware
const verifyJWT = require('../middleware/verifyJWT.js');

api.post('/',
             verifyJWT, (req, res) => {

                try {
                    res.status(201).send({
                        status: 'success'
                    });
            
                 } catch (err) {
                    res.status(500).send({
                        status: 'error',
                        message: err.message
                    })
                }
            }
            );

module.exports = api;