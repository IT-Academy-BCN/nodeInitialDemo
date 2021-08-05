const db = require("../models");
const Game = db.games;
const Op = db.Sequelize.Op;

exports.play = (req,res) => {
    const userId = req.params.id;
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    let success = 0;
    const dice1 = parseInt(6*Math.random()+1);
    const dice2 = parseInt(6*Math.random()+1);
    const result = dice1 + dice2;

    if(result === 7){
        success = 1;
    }

    const game = {
        userId: userId,
        dice1: dice1,
        dice2: dice2,
        success: success
    };

    Game.create(game)
    .then(data => {
        res.json({
            success: true,
            url: fullUrl,
            message: data
        });
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            url: fullUrl,
            message:
            err.message || "Some error occurred while creating the game(throw)"
        });
    });
};

exports.userGames = (req,res) => {
    const userId = req.params.id;
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    Game.findAll({ where: { userId: userId } })
    .then(data => {
        if(Object.keys(data).length){
            res.json({
                success: true,
                url: fullUrl,
                message: data
            });
        }else{
            res.json({
                success: true,
                url: fullUrl,
                message: "Empty data"
            });
        }
        
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            url: fullUrl,
            message: "Error retrieving tutorial with id=" + userId
        });
    });
};

exports.delete = (req,res) => {
    const userId = req.params.id;
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    Game.destroy({ where: { userId: userId } })
    .then(num => {
        if(true){
            res.json({
                success: true,
                url: fullUrl,
                message: `Games from user ${userId} deleted successfully`
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            url: fullUrl,
            message: `Cannot delete games from user ${userId}`
        });
    });
};