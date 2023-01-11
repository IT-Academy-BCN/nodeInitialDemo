import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";

const User = sequelize.define( 'users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
  }
},
  { timestamps: true }
);

await User.sync( {
  alter: true
} );

export default User;
