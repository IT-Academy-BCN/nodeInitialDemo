const User = require('../models/user.js');

const createUser = async (data, socket) => {
  let user = new User({
    username: data.username,
    roomname: data.roomname,
    socket,
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

module.exports = { createUser, changeRoom, disconnect };
