const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {

    if (!req.headers['user-token']) {
        return res.json({ error: 'user-token need on your headers to access'})
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToken, 'supersecrettoken');
    } catch (err) {
        res.send({ message: err.message + " [token incorrect]" })
    }

    if (payload.expiredAt < moment().unix()) {
        return res.json({ error: "token expired"});
    }

    next();
}

module.exports = { "checkToken": checkToken }