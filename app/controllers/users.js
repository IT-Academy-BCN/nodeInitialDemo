import User from "../models/users.js";


export const createUser = async ( req, res ) => {
  try {
    const { username, password } = req.body;
    if ( username === "" ) {
      const date = new Date();
      const username = `Anònim-${ date.getTime() }`;
      await User.create( { username, password } );
      return res.status( 201 ).json( { message: "Player created correctly" } );
    }
    const user = await User.findOne( { where: { username } } );
    if ( user ) {
      res.status( 409 ).json( { message: "User already exists" } );
    } else {
      await User.create( { username, password } );
      res.status( 201 ).json( { message: "Player created correctly" } );
    }
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
