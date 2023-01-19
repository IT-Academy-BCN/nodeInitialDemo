module.exports = (sequelize, type) => {
  return sequelize.define('user', {
    id: {
      type: type.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: type.STRING,
    winPercent: type.VIRTUAL,
    globalPercent: type.VIRTUAL,
  });
};
