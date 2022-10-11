const bcrypt = require('bcrypt')
const {Users} = require('../models/models.js');

module.exports = async (req, res) => {
    
    try {
        const userName = req.body.userName;
        const password = req.body.password;
        
        //check if credentials provided
        if (!userName) return res.status(400).send({ status: "fail", message: `Username not provided`});
        if (!password) return res.status(400).send({ status: "fail", message: `Password not provided`});

        //check if name is duplicate
        const exist = await Users.find({userName});
        if(exist.length > 0) return res.status(400).send({ status: "fail", message: `Username already registered`});

        const hashedPassword = await bcrypt.hash(password, 10)
        
        //save user to db with hashed password
        await Users.create({ userName: userName, password: hashedPassword })

        res.status(201).send({
            status: "success", 
            message: `user ${userName} registered`
        });

     } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
}