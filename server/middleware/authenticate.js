const {Users} = require('../models/models.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authenticate = async (req, res, next) => {

    const {userName, password} = req.body;
   
    if (!userName) return res.status(400).send({ status: 'fail', message: 'Username not provided'});
    if (!password) return res.status(400).send({ status: 'fail', message: 'Password not provided'});

    // Check user
    const user = await Users.find({userName});
    if(!user.length) return res.status(400).send({ status: 'fail', message: 'Username not valid.'});

    // Check password 
    if ( !(await bcrypt.compare(password, user[0].password))) {
        return res.status(400).send({
            status: 'fail',
            message: 'Password not valid.'
        })
    }
    next()
}