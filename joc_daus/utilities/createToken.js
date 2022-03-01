const jwt = require('jwt-simple');
const moment = require('moment');

const createToken = (user) => {
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        experidAt: moment().add(5, 'minutes').unix()
    }

    return jwt.encode(payload, 'supersecrettoken');
};

module.exports = { "createToken": createToken }