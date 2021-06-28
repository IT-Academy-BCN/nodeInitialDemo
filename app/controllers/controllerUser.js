const User = require('../models/user.js');

const createUser = async (data) => {
  let user = new User({
    username: data.username,
    email: data.email,
    
  });

  try {
    user.save();
  } catch (err) {
    console.log(err);
  }
};

const changeRoom = async (socket, newroom) => {
  await User.findOneAndUpdate(
    { socket: socket },
    { roomname: newroom },
    (error, data) => {
      if (error) {
        error;
      } else {
        console.log(data);
      }
    }
  );
};

const disconnect = async (socket) => {
  try {
    await User.deleteOne({ socket: socket.id });
  } catch (err) {
    console.log(err);
  }
};

// const checkUser = async (user) => {

//   User.countDocuments({ username: user.name, email: user.email }, (err, count) =>{
  
// })
// }


module.exports = { createUser, changeRoom, disconnect,  };
