import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;



const verifyToken = ( req, res, next ) => {
  const authorization = req.headers.authorization;
  if ( !authorization ) {
    return res.status( 401 ).json( {
      message: 'No Authorization Header'
    } );
  }
  try {
    const token = authorization.split( 'Bearer ' )[ 1 ];
    if ( !token ) {
      return res.status( 401 ).json( {
        message: 'Invalid Token Format'
      } );
    }
    const decode = jwt.verify( token, SECRET_KEY );
    req.user = decode;
    next();
  } catch ( error ) {
    if ( error instanceof jwt.TokenExpiredError ) {
      return res.status( 401 ).json( {
        message: 'Session Expired',
        error: error.message,
      } );
    }
    if ( error instanceof jwt.JsonWebTokenError || error instanceof TokenError ) {
      return res.status( 401 ).json( {
        message: 'Invalid Token',
        error: error.message,
      } );
    }
    res.status( 500 ).json( {
      message: 'Internal server Error',
      error: error.message,
      stack: error.stack
    } );
  }
};


export default verifyToken;
