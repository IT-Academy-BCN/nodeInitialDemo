const Users = require('mongoose').model("Users");
const bcrypt = require('bcrypt')

//register
module.exports = async (req, res) => {
    
    try {
        const {userName, password} = req.body;
        
        if (!userName) return res.status(400).send({ status: 'fail', message: 'Username not provided'});
        if (!password) return res.status(400).send({ status: 'fail', message: 'Password not provided'});

        const duplicateUser = await Users.find({userName});
        if(duplicateUser.length > 0) return res.status(400).send({ status: "fail", message: 'Username already registered'});

        const hashedPassword = await bcrypt.hash(password, 10)

        await Users.create({ userName: userName, password: hashedPassword })

        res.status(201).send({
            status: 'success', 
            message: 'User has been registered.'
        });

     } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
}