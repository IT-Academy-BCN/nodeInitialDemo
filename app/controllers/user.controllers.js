const { User } = require('../db/db.connect');
const getPercentage = require('./win-percent.controller');

async function createUser(req, res) {
  try {
    let { username } = req.body;
    if (!username) {
      username = `Anon_${Math.floor(Math.random() * 10000)}`;
      const player = await User.create({ username });
      return res.status(201).json({
        username: player.username,
        id: player.id,
        msg: 'user created',
      });
    }
    const user = await User.findOne({
      where: { username },
    });
    if (user) {
      return res
        .status(400)
        .json({ success: false, msg: `user ${username} already exists` });
    } else {
      const player = await User.create({ username });
      res.status(201).json({
        username: player.username,
        id: player.id,
        msg: 'user created',
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

async function getUsers(req, res) {
  try {
    const list = await getPercentage('id', 'username', 'winPercent');
    res.status(200).json({ nbHits: list.length, list });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

module.exports = {
  createUser,
  getUsers,
};
