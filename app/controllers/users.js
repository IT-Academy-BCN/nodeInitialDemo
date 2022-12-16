import User from "../models/users.js";


export const createUser = async ( req, res ) => {
  try {
    const { username } = req.body;
    const user = await User.create( { username } );
    res.status( 201 ).json( user );
  } catch ( error ) {
    res.status( 500 ).json( error );
  }
};

export const getUsers = async ( req, res ) => {
  try {
    const users = await User.findAll();
    res.status( 200 ).json( users );
  } catch ( error ) {
    res.status( 500 ).json( error );
  }
};
