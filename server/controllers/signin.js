const jwt = require('jsonwebtoken');

const User = require('../models/users.js');

const createJWT = require('../helpers/createJWT.js');


//sign in 
module.exports = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({
        email
      }, function(err, user) {
        if (err) throw err;
        if (!user || !user.comparePassword(req.body.password)) {
          return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        const token = createJWT({email});
        return res.json({ token});
      });
    };


    


