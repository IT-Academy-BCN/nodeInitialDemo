const User = require('../models/users');
const jwt = require('jsonwebtoken');


const secretKey = process.env.TOKEN_SECRET_KEY;
const expTime = 1440;

const createJWT = (payload) => {
    return jwt.sign(payload, secretKey, {
    expiresIn: expTime
    })
}

const signup = async(req, res) => {
    
    const {name, email, password} = req.body;
    try {
        const user = await User.create({name, email, password});
        const token = createJWT(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge : expTime * 1000})
        res.status(201).json({user});
    } catch (err){
         let errors = alertError(err);
         res.status(200).json({errors});
    }
}


const login = async(req, res) => {
    const {name, password} = req.body;
    try {
        const user = await User.login(email, password);
        const token = createJWT(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge : expTime * 1000})
        res.status(201).json({user});
    } catch (err) {
        let errors = alertError(err);
        res.status(200).json({errors});
    }
}


const logout = (req, res) => {
    res.cookie('jwt', token, {httpOnly: true, maxAge : expCookie})
        res.status(200).json({logout : true});
}


const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
        if(token){
            jwt.verify(token, secretKey, async (err, decodedToken) => {
                if(err){
                    console.log(err.message);
                } else {
                    let user = await User.findById(decodedToken.id);
                    res.json(user);
                    next();
                }
            })
        } else {
            next();
        }
}


module.exports = {login, signup, logout, checkUser};

