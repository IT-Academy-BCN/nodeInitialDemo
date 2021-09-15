const Xat = require('../models/xat');

const addMessage = async (data) => {
  let xat = new Xat(data);
  try{
    await xat.save();
  } catch (err) {
    throw err;
  }
};

const readMessages = async (data) => {
  try{
    let messages = await Xat.find({
      roomname: data
    });
    return messages;
  } catch (err) {
    throw err;
  }
};

module.exports = {addMessage,readMessages};
