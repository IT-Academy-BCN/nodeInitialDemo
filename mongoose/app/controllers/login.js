import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const login = ( req, res ) => {
  const user = {
    id: 1,
    username: 'admin',
    password: 'admin'
  };
  const token = jwt.sign( { user }, SECRET_KEY, { expiresIn: '1h' } );
  res.json( {
    token
  } );
};

export default login;
