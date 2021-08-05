const { sequelize } = require("../models");
const db = require("../models");
const Game = db.games;
const Op = db.Sequelize.Op;

exports.ranking = (req,res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    Game.findAll({
        attributes: [[sequelize.fn('avg', sequelize.literal('success * 100')), 'average']],
        raw: true
    })
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
            err.message || "Some error ocurred while retrieving users rankings"
        });
    });
};

exports.loser = (req,res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    sequelize.query('SELECT MIN(av) AS loser FROM (SELECT AVG(g.success), u.name AS av FROM GAMES g JOIN USERS u ON u.id = g.userId GROUP BY userId) x',{ raw: true })
    .then(function(query) {
        res.json({
            success: true,
            url: fullUrl,
            message: query[0]
        });
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            url: fullUrl,
            message:
            err.message || "Some error occurred while executing the query"
        });
    });
};

exports.winner = (req,res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    sequelize.query('SELECT MAX(av) AS winner FROM (SELECT AVG(g.success), u.name AS av FROM GAMES g JOIN USERS u ON u.id = g.userId GROUP BY userId) x',{ raw: true })
    .then(function(query) {
        res.json({
            success: true,
            url: fullUrl,
            message: query[0]
        });
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            url: fullUrl,
            message:
            err.message || "Some error occurred while executing the query"
        })
    })
};