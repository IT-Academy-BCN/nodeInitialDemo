
const messageModel = (db, type) => {
    return db.define('message', {
        userID: type.INTEGER,
        text: type.STRING(180),
        room: type.STRING
    });
};

module.exports = messageModel;