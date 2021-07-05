const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    const userName = req.body.name;
    
    if(userName === undefined || userName === ''){
        userName = 'Anònim';
    }

    const user = {
        name: userName,
        register_date: Date.now()
    };

    User.create(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: 
            err.message || "Some error occurred while creating the user"
        });
    });
};

exports.findAll = (req,res) => {
    const userName = req.query.name;
    var condition = userName ? { userName: { [Op.like]: `%${userName}%` } } : null;

    User.findAll({ where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving users"
        });
    });
};

exports.update = (req,res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: "User was updated successfully"
            });
        }else{
            res.send({
                message: `Cannot update tutorial with id=${id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error updating user (${id})`
        });
    });
};