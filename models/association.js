const Player = require("../models/Player");
const Game = require("../models/Game");
Player.hasMany(Game);
Game.belongsTo(Player);