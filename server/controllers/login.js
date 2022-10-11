const {Users} = require('../models/models.js');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {

    try {
        const userName = req.body.userName;
        const userEntry = await Users.findOne({userName});

        const user = {
            userId: userEntry._id,
            userName: userEntry.userName
        }

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

        res.status(201).send({
            status: "success", 
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