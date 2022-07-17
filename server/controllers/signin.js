const Users = require('mongoose').model('Users')
const jwt = require('jsonwebtoken')

//sign In
module.exports = async (req, res) => {
     
  try {
        const userName = req.body.userName;

        const userEntry = await Users.findOne({userName});

        const user = {
            userId: userEntry._id,
            userName: userEntry.userName
        }

        const accessToken = jwt.sign(user, process.env.TOKEN_SECRET_KEY)
         res.status(201).send({
            status: 'success', 
            user,
            accessToken
        });

     } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
}


