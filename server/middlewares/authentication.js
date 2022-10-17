const jwt = require('jsonwebtoken');
//const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');

const {Users} = require('../models/models.js');

const authentication = async (req, res, next) => {

    const userName = req.body.userName;
    const password = req.body.password;
     
    //check if credentials provided
    if (!userName) return res.status(400).send({ status: "fail", message: `username not provided`});
    if (!password) return res.status(400).send({ status: "fail", message: `password not provided`});

    // Check if user exists
    const user = await Users.find({userName});
    if(!user.length) return res.status(400).send({ status: "fail", message: `Wrong username`});

    // Check if password is correct
    if (!await bcrypt.compare(password, user[0].password)) {
        return res.status(400).send({
            status: 'fail',
            message: "Wrong password"
        })
    }
    next()
}
//authenticate web token
const authJWT = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] 
    if (token === null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403)
        req.userName = decoded.userName;
        req.userId = decoded.userId;
        next()
    })
}

module.exports = {authentication, authJWT};