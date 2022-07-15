'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = ('../models/users.js');

const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY


const register = async (req, res) => {

    const{fullname, email, password} = req.body;

    const duplicateEmail = await User.findOne({email});
    if(duplicateEmail){
        return res.status(400).json({
            message:"This email is already registered."
        });
    }

    const duplicateName = await User.findOne({fullname});
    if(duplicateName){
        return res.status(400).json({
            message:"This name is already taken."
        });
    }
      
    const newUser = new User(req.body);
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    newUser.save(function(err, user) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        user.hash_password = undefined;
        return res.json(user);
      }
    });
  };


 const signIn = (req, res) => {
    User.findOne({
        email: req.body.email
      }, function(err, user) {
        if (err) throw err;
        if (!user || !user.comparePassword(req.body.password)) {
          return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, TOKEN_SECRET_KEY,) });
      });
    };

  const loginRequired = (req, res, next) => {
        if (req.user) {
          next();
        } else {
      
          return res.status(401).json({ message: 'Unauthorized user!!' });
        }
      };
     
     const profile = (req, res, next) => {
        if (req.user) {
          res.send(req.user);
          next();
        } 
        else {
         return res.status(401).json({ message: 'Invalid token' });
        }
      };


      module.exports = {register, signIn, loginRequired, profile}



