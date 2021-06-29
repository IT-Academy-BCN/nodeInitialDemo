const User = require('../models/user.js');

const createUser = async (data) => {
  let user = new User({
    username: data.username,
    email: data.email,
    roomname: 'Chat',
  });

  try {
    user.save();
  } catch (err) {
    console.log(err);
  }
};

const changeRoom = async (user, newroom) => {
  await User.findOneAndUpdate(
    { username: user },
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
    await User.deleteOne({ username: socket.username });
  } catch (err) {
    console.log(err);
  }
};

const checkuser = async () => {
  let us = await User.findOne().sort({ $natural: -1 });
  console.log(us.username);
  return us.username;
};

module.exports = { createUser, changeRoom, disconnect, checkuser };
