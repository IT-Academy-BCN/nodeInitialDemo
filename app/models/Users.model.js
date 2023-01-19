module.exports = (sequelize, type) => {
  return sequelize.define('user', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: type.STRING,
    winPercent: type.VIRTUAL,
    globalPercent: type.VIRTUAL,
  });
};
