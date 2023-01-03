import User from "../models/users.js";


export const createUser = async ( req, res ) => {
  try {
    const { username, password } = req.body;
    const user = await User.create( { username, password } );
    res.status( 201 ).json( user );
  } catch ( error ) {
    res.status( 500 ).json( error );
  }
};

export const getUsers = async ( req, res ) => {
  try {
    const users = await User.findAll();
    const usersList = users.map( ( { id, username } ) => ( { id, username } ) );
    res.status( 200 ).json( usersList );
  } catch ( error ) {
    res.status( 500 ).json( error );
  }
};


export const updateUser = async ( req, res ) => {
  try {
    const { username } = req.body;
    const { id } = req.params;
    await User.update( { username }, { where: { id } } );
    res.status( 200 ).json( { message: "Player updated correctly" } );
  } catch ( error ) {
    res.status( 500 ).json( error );
  }
};
