const playerInfo = require('../models/playerdb')


class Player {
    constructor(username) {
        this.username = username.toLowerCase()
    };

    async getPlayers () {
        let playerList = await playerInfo.findAll({})

        console.log(playerList)

        if (playerList.length == 0) {
            return `0 jugadors registrats`
        } else {
        return playerList}
    }


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
            console.log(`${username} està ja registrat, prova amb un altre`)
            return userConfirmation = `${username} està ja registrat, prova amb un altre`
        }
    };

    async checkPlayer() {
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

    async checkPlayerID() {
        try {
            let checkUser = await playerInfo.findAll({
                where: {
                    id: this.username
                }
            });

            console.log(checkUser)

            if (checkUser.length === 0) {
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
                    id: this.username
                }
            });

            if (checkUser) {
               this.username = newUsername
               let checkedPlayer = await this.checkPlayer(newUsername)

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

    async registerWin() {
        let playerStats = await playerInfo.findOne({where: {id : this.username}})
        
        let newWinAmount = playerStats.won_games + 1
        console.log(newWinAmount)
        let totalPlayed = newWinAmount + playerStats.losed_games
        console.log(totalPlayed)
        let newVictoryPercentage = ((playerStats.won_games / totalPlayed)*100).toFixed(2)
        console.log(newVictoryPercentage)
    
        await playerStats.set({
            won_games: newWinAmount,
            victory_percentage: newVictoryPercentage
        })

        await playerStats.save()

        return playerStats

    }

    async registerLoses() {
        let playerStats = await playerInfo.findOne({where: {id : this.username}})
        
        let  newLostAmount = playerStats.losed_games + 1
        console.log(newLostAmount)
        let totalPlayed = playerStats.won_games + newLostAmount
        console.log(totalPlayed)
        let newVictoryPercentage = ""

        if(playerStats.won_games == 0) {
            newVictoryPercentage = (1/2)*100
        } else {
        newVictoryPercentage = ((playerStats.won_games / totalPlayed)*100).toFixed(2)
        }
    
        await playerStats.set({
            losed_games: newLostAmount,
            victory_percentage: newVictoryPercentage
        })

        await playerStats.save()

        return playerStats

    }
}

module.exports = Player
