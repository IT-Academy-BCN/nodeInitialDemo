const express = require('express');
const api = express.Router();

const {authJWT} = require('../middlewares/authentication.js');


api.post('/',
            authJWT,
            async (req, res) => {

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
            }
            );

module.exports = api;
