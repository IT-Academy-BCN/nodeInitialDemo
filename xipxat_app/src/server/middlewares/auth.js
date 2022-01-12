const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function isAuth(req, res, next) {
console.log(req)
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'You are NOT authorized' })
    }

    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.decode(token, config.SECRET_TOKEN);

    if (payload.exp <= moment().unix()) {
        return res.status(402).send({ message: `Token expired!` });
    }

    req.user._id = payload.sub
    next();
};

module.exports = isAuth
