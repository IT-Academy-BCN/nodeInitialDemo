const
Player = require('../MongoPersistence/db'),
uniqid = require('uniqid')

const addNewPlayer = async (req, res)=>{
  try{
    const { name } = req.body
    if(!name){
      name = uniqid('ANONIM-')
      console.log(name)
    }

  } catch(e){

  }
}


module.exports = {
  addNewPlayer
}