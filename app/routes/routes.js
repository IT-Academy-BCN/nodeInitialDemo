module.exports = app => {
    const users = require("../controllers/userController.js");
    const games = require("../controllers/gameController.js");
    const ranking = require("../controllers/rankingController.js");

    var router = require("express").Router();

    router.post("/",users.create);

    router.put("/:id",users.update);

    router.post("/:id/games",games.play);

    router.delete("/:id/games",games.delete);

    router.get("/",users.findAll);

    router.get("/:id/games",games.userGames);

    router.get("/ranking",ranking.ranking);

    router.get("/ranking/loser",ranking.loser);

    router.get("/ranking/winner",ranking.winner);

    app.use('/users',router);
}