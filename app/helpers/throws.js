const throwdb = require('../models/throwdb')
const player = require('./player');


class Throws {
    async registerThrows(playerId) {
        let diceOne = Number(Math.floor(Math.random() * 6) + 1)
        let diceTwo = Number(Math.floor(Math.random() * 6) + 1)
        let total = diceOne + diceTwo

        const newThrow = await throwdb.create({
            first_dice: diceOne,
            second_dice: diceTwo,
            total: total,
            playerId: playerId
        })
        return newThrow
    }

    async getThrows(playerID) {
        try {
            let throwList = await throwdb.findAll({where:{player_id: playerID}})
            return throwList
        }
        catch (err){return err}
    }

    async destroyRows(playerID) {
        try {
            let throwList = await throwdb.findOne({
                where: {
                    playerId: playerID
                }
            })

            if (throwList == null) {
                return (`Jugador amb id ${playerID} no te jugades registrades`)
            } else {
                await throwdb.destroy({
                    where: {
                        playerId: playerID
                    },
                });

                return (`Les tirades del usuari amb ID ${playerID} han estat borrades`)
            }
        } catch (err) {
            return err
        }
    }
}

module.exports = Throws