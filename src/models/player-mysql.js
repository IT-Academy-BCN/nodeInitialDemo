import { define } from 'sequelize';

export const Roll = define('Roll', {
    id: {
        type: DataTypes.INTERGER,
        primaryKey: true,
        autoIncrement: true
    },
    diceA: {
        type: DataTypes.INTERGER
    },
    diceB: {
        type: DataTypes.INTERGER
    },
    rollScore: {
        type: DataTypes.INTERGER
    },
    veredict: {
        type: DataTypes.STRING
    }
},
    {
        timestamps: false
    }
);

export const Player = define('Player', {
    id: {
        type: DataTypes.INTERGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    totalGames: {
        type: DataTypes.STRING,
        defaultValue: 0
    },
    totalWins: {
        type: DataTypes.INTERGER,
        defaultValue: 0
    },
    winRate: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValues: 0
    }
},
    {
        timestamps: true,
        updatedAt: false,
        createdAt: 'data'
    }
);

Player.hasMany(Roll, {onDelete:'cascade'});
Roll.belongsTo(Player);