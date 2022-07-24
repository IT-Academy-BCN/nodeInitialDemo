const jwt = require('jsonwebtoken');

const createJWT = async (payload ) =>{
    
    return jwt.sign( payload, process.env.TOKEN_SECRET_KEY, {
        expiresIn:"30d"
    });       
}


module.exports = {
    createJWT
}