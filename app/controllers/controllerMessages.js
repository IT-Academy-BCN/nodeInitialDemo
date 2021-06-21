 Chat = require('../models/chat');

const addMessage = async (data) => {
  let chat = new Chat(data);
  try {
    await chat.save();
  } catch (err) {
    console.log(err);
  }
};
const readMessages = async (data) => {
    //let chat = new Chat();
    try {
        let messages = await Chat.find({ roomname: data});
        return messages;
      } catch (err) {
        console.log(err);
      }
    
  
    
  };
module.exports = { addMessage, readMessages } ;
