const jwt = require('jsonwebtoken');
const User = require('../models/users.js');

const createJWT = require('../helpers/createJWT.js');


const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;

//renew token
module.exports = async (req,res) => {
    const { email } = req.body;
    const token = await generarJWT( {email} );
    res.status(200).json({
        token
    });  
}