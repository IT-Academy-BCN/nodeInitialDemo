const Users = require('./models/users.js');
const bcrypt = require('bcrypt')


module.exports = async (req, res) => {
   
    try {
        const userName = req.body.userName;
        const password = req.body.password;

        if (!userName || !password) return res.status(400).send({ status: "fail", message: `Missing credentials.`});
        
        const hashedPassword = await bcrypt.hash(password, 10);

        await Users.create({ userName: userName, password: hashedPassword })

        res.status(201).send({
            status: "success", 
            message: `User, ${userName}, has been registered.`
        });

     } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
}



const disconnectUser =