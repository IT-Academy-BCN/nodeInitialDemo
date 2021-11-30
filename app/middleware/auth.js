const auth = require('basic-auth');
const users = require('../user.json');

const authentication = (req, res, next) => {
    const user = auth(req);
    //console.log(user);
    if(!user || user.name !== users.name || user.pass !== users.pass){
        res.status(401).send('Unauthorized');
        return;
    }
    next();
}

module.exports = authentication
