import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY;

const login = ( req, res ) => {
  const user = {
    id: 1,
    username: 'admin',
    password: 'admin'
  };
  jwt.sign( { user }, SECRET_KEY, ( err, token ) => {
    res.json( {
      token
    } );
  } );
};

export default login;
