
module.exports = (sequelize, type) => {
    return sequelize.define('Throws',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        diceA: type.INTEGER,
        diceB: type.INTEGER,
        total: type.INTEGER,
        win: type.BOOLEAN,
    },{
        updatedAt: false
    }
    )
}
