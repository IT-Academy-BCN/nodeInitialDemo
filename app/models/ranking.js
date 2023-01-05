import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";
import User from "./users.js";


const Ranking = sequelize.define( 'ranking', {
  puntuacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  jugadorId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  gameId: {
    type: DataTypes.INTEGER,
    references: {
      model: Game,
      key: 'id'
    }
  }
}, { timestamps: false } );

await Ranking.sync( {
  alter: true
} );

export default Ranking;
