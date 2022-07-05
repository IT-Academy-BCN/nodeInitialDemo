const jwt = require('jsonwebtoken');

module.exports = async (payload) => {
    
    return jwt.sign(payload, TOKEN_SECRET_KEY, {
        expiresIn: 1440
        });
        
}
    