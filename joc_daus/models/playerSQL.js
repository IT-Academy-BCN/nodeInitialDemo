
module.exports = (sequelize, type) => {
    return sequelize.define('Player', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false,
            unique: true,
            defaultValue: "ANONIM"
        },
        totalThrows: {
            type: type.INTEGER,
            defaultValue:0,
        },
        winThrows: {
            type: type.INTEGER, 
            defaultValue:0,
        },
        percentage: {
            type: type.DECIMAL(10,2), 
            defaultValue:0,
        }
    }, 
        {
            timestamps: true
        }
    )
}

Player.hasMany(Throws,{onDelete:'cascade'})
