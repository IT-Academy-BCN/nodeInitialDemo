const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    let userName = req.body.name;
    
    if(userName === undefined || userName === ""){
        userName = "Anònim";
    }

    const user = {
        name: userName,
        register_date: Date.now()
    };

    User.create(user)
    .then(data => {
        res.json({
            success: true,
            message: data
        });
    })
    .catch(err => {
        res.status(500).json({
            success: false,
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
        if(Object.keys(data).length){
            res.json({
                success: true,
                message: data
            });
        }else{
            res.json({
                success: true,
                message: "No users found"
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            success: false,
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
            res.json({
                success: true,
                message: "User was updated successfully"
            });
        }else{
            res.json({
                success: false,
                message: `Cannot update user with id=${id}`
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            message: `Error updating user (${id})`
        });
    });
};
