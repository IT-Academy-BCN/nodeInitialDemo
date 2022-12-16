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
  },
  password: {
    type: DataTypes.STRING,
  },
},
  { timestamps: true }
);

export default User;
