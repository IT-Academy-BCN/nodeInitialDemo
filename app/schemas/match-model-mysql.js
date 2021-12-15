// eslint-disable-next-line max-classes-per-file
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../data-base/db-mySQL');
const User = require('./user-model-mysql');

class Match extends Model {}
Match.init({
  dice1: {
    type: DataTypes.INTEGER,
  },
  dice2: {
    type: DataTypes.INTEGER,
  },
  gameWon: { type: DataTypes.BOOLEAN },
}, { sequelize, modelName: 'match' });

User.hasMany(Match, {
  foreignKey: {
    allowNull: false,
  },
});

Match.belongsTo(User); // A BelongsTo B

module.exports = Match;
