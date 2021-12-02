
const userModel = (db, type) => {
    return db.define('user', {
        name: type.STRING,
        username: type.STRING,
        password: type.STRING(150)
    });
};

module.exports = userModel;