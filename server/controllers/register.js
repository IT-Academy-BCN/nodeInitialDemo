
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/users.js');


//register
module.exports = async (req, res) => {

   
    try{
    
    const duplicateEmail = await User.findOne({email: req.body.email});
    if(duplicateEmail){
        return res.status(400).json({
            message:"This email is already registered."
        });
    }

    const duplicateName = await User.findOne({fullname: req.body.fullname});
    if(duplicateName){
        return res.status(400).json({
            message:"This name is already taken."
        });
    }
      
   
     const newUser = new User(req.body);
     newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    
    await newUser.save() 
    } catch (err){
        return res.status(503).json({
            message:"Database error"
        });
    }    
}      

