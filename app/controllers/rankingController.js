const { sequelize } = require("../models");
const db = require("../models");
const User = db.users;
const Game = db.games;
const Op = db.Sequelize.Op;

exports.ranking = (req,res) => {
    Game.findAll({
        attributes: [[sequelize.fn('avg', sequelize.literal('success * 100')), 'average']],
        raw: true
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error ocurred while retrieving users rankings"
        });
    });
};

exports.loser = (req,res) => {
    sequelize.query('SELECT MIN(av) AS loser FROM (SELECT AVG(g.success), u.name AS av FROM GAMES g JOIN USERS u ON u.id = g.userId GROUP BY userId) x',{ raw: true })
    .then(function(query) {
        res.json(query[0]);
    });
};

exports.winner = (req,res) => {
    sequelize.query('SELECT MAX(av) AS winner FROM (SELECT AVG(g.success), u.name AS av FROM GAMES g JOIN USERS u ON u.id = g.userId GROUP BY userId) x',{ raw: true })
    .then(function(query) {
        res.json(query[0]);
    })
};