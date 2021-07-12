Chat = require('../models/chat');

const addMessage = async (data) => {
  let chat = new Chat(data);
  try {
    await chat.save();
  } catch (err) {
    throw err;
  }
};
const readMessages = async (data) => {
  try {
    let messages = await Chat.find({ roomname: data });
    return messages;
  } catch (err) {
    throw err;
  }
};
module.exports = { addMessage, readMessages };
