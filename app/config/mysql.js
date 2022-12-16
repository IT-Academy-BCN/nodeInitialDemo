/* eslint-disable no-undef */
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const sequelize = new Sequelize( database, username, password, {
  host,
  dialect: "mysql",
  frozenTableName: true,
} );


const dbConnectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log( "Connection has been established successfully." );
  } catch ( error ) {
    console.error( "Unable to connect to the database:", error );
  }
};


export {
  sequelize,
  dbConnectMysql
};
