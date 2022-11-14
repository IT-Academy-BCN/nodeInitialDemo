const playerInfo = require('../models/playerInfo')
const gameInfo = require('../models/gameInfo')

class Player {
    constructor() {
        this.username = ""
    };

    async createPlayer() {
        let checkedPlayer = await this.checkPlayer()
        let userConfirmation = ""

        if (!checkedPlayer) {
            const user = await playerInfo.create({
                username: this.username,
                register_date: new Date(),
                won_games: 0,
                losed_games: 0,
                victory_percentage: 1
            });
            return userConfirmation = {
                id: user.player_id,
                username: user.username,
                register_date: user.register_date
            }
        } else {
            console.log(`${this.username} està ja registrat, prova amb un altre`)
            return userConfirmation = `${this.username} està ja registrat, prova amb un altre`
        }
    };

    async checkPlayer(username) {
        try {
            let checkUser = await playerInfo.findAll({
                where: {
                    username: this.username
                }
            });

            console.log(checkUser)

            if (checkUser.length === 0 && this.username === '') {
                let randomID = await playerInfo.count()
                this.username = `ANÒNIM${randomID}`
                return false
            } else if (checkUser.length === 0) {
                return false
            } else {
                return true
            }
        } catch (err) {
            console.log(err)
        }
    }

    async modifyPlayer(newUsername) {

        console.log(newUsername)

        try {
            let checkUser = await playerInfo.findOne({
                where: {
                    player_id: this.username
                }
            });

            if (checkUser) {
               this.username = newUsername
               let checkedPlayer = await this.checkPlayer(newUsername)
               console.log(checkedPlayer)

                if (!checkedPlayer) {

                    await checkUser.set({
                        username: this.username
                    })

                    await checkUser.save()

                    return `Usuari modificat, nou nom d'usuari: ${this.username}`
                } else {
                    new Error(`${this.username} està ja registrat, prova amb un altre`)
                    return `${this.username} està ja registrat, prova amb un altre`
                }

            } else {
                new Error(`ID ${this.username} no registrat`)
                return `ID ${this.username} no registrat`
            }
        } catch (err) {
            return err
        }
    }

    async playerListBySuccess () {
        console.log(`I AM HERE SUCCESS`)
        try {
        playerInfo.findAll({
            include: [{model: gameInfo}],
            order: [[gameInfo, 'Order', 'DESC']],
        }).then((playerList) => {return playerList})

    } catch (err) {return err}
} 
}

module.exports = Player
