const User = require('../db/db.connect');

module.exports = (sequelize, type) => {
  return sequelize.define('game', {
    id: {
      type: type.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    diceOne: {
      type: type.INTEGER,
      allowNull: false,
    },
    diceTwo: {
      type: type.INTEGER,
      allowNull: false,
    },
    playerID: {
      type: type.INTEGER,
      reference: {
        model: User,
        key: 'id',
      },
    },
    win: {
      type: type.BOOLEAN,
      allowNull: false,
    },
  });
};
