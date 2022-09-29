const { DataTypes } = require('sequelize');


function tasquesModel(sequelize) {
    const attributes = {
        id : { type: DataTypes.NUMBER, allowNull: false},
        nomTasca : { type: DataTypes.STRING, allowNull: false },
        usuari : { type: DataTypes.STRING, allowNull: false },
        estat : { type: DataTypes.STRING, allowNull: false },
        dataInici :{ type: DataTypes.DATE, allowNull: false },
        dataFinal :{ type: DataTypes.DATE, allowNull: false },
    };

    const options = {
        timestamps: false
    };

    return sequelize.define('tasques', attributes, options);
}
        
module.exports = tasquesModel;