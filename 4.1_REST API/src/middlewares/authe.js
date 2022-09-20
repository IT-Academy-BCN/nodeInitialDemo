const basicAuth = require('express-basic-auth');

const authe = basicAuth({
    users: { 'admin': '54321' },
    unauthorizedResponse: { 
        status: "not-authorized",
        message:"401-Acceso no autorizado" 
    }
});

module.exports = authe;