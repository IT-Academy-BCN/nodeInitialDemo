const userModel = (db, type) => {
    return db.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        username: type.STRING,
        password: type.STRING
    });
};

module.exports = userModel;