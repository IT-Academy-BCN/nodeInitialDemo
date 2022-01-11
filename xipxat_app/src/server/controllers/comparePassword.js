const bcrypt = require('bcrypt');

module.exports = function checkPassword(password, userPassword, err, result) {
    
    bcrypt.compare( password, userPassword, (err, result) => {

    if (result) {
        return "res.status(200).send('access granted');"
    } else if (!result) {
        return "res.status(400).send('access NOT granted');"
    } else {
        return "res.status(500).send('user or password NOT correct');"
    }

    });
};
