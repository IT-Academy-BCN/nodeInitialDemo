
const jwt = require('jwt-simple');
const moment = require('moment')
const config = require('../config')

function makeToken(user) {
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(2, 'days').unix(),
    }

    return jwt.encode(payload, config.SECRET_TOKEN)

};

module.exports = makeToken