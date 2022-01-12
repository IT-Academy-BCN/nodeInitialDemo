
const bcrypt = require('bcrypt');

module.exports = function checkPassword(password, userPassword, err, result) {
    
    bcrypt.compare( password, userPassword, (res, result) => {

    if (result) {
        return { message: 'access granted' };
    } else if (!result) {
        return { message: 'access NOT granted' };
    } else {
        return { message: 'user or password NOT correct' };
    }

    });
};