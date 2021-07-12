const User = require('../models/user.js');

const createUser = async (req, res) => {
  let user = new User({
    username: req.body.username,
    roomname: req.body.roomname,
    socket: '',
  });

  try {
    await user.save();
    return res.status(200).json({ success: true, user });
  } catch (err) {
    return res.status(500).json({ success: false, error: error });
  }
};

const addSocket = async (id) => {
  try {
    await User.findOneAndUpdate({ socket: '' }, { socket: id });
  } catch (err) {
    throw err;
  }
};

const changeRoom = async (id, newroom) => {
  try {
    await User.findOneAndUpdate({ socket: id }, { roomname: newroom });
  } catch (err) {
    throw err;
  }
};

const disconnect = async (socket) => {
  try {
    await User.deleteOne({ socket: socket.id });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createUser, changeRoom, disconnect, addSocket };
