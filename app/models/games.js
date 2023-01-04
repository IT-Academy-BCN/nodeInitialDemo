import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";
import User from "./users.js";

const Game = sequelize.define( 'games', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  resultado1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  resultado2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jugadorId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },

}, { timestamps: true } );



await Game.sync( {
  alter: true
} );


export default Game;
