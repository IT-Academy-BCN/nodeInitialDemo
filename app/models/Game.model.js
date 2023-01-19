const User = require('./User.model');

module.exports = (sequelize, type) => {
  return sequelize.define('game', {
    id: {
      type: type.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    playerID: {
      type: type.INTEGER,
      reference: {
        model: User,
        key: 'id',
      },
    },
    diceOne: {
      type: type.INTEGER,
      allowNull: false,
    },
    diceTwo: {
      type: type.INTEGER,
      allowNull: false,
    },
    win: {
      type: type.BOOLEAN,
      allowNull: false,
    },
  });
};
