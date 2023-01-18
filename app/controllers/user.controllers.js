const { User } = require('../db/db.connect');
const getPercentage = require('./win-percent.controller');

async function createUser(req, res) {
  try {
    let { username } = req.body;
    if (!username) {
      username = `Anon_${Date.now()}`;
      await User.create({ username });
      return res.status(201).json({ username, msg: 'user created' });
    }
    const user = await User.findOne({
      where: { username },
    });
    if (user) {
      return res
        .status(400)
        .json({ success: false, msg: `user ${username} already exists` });
    } else {
      await User.create({ username });
      res.status(201).json({ username, msg: 'user created' });
    }
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

async function getUsers(req, res) {
  try {
    const playerList = await getPercentage();
    res.status(200).json(playerList);
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

async function modifyPlayer(req, res) {
  try {
    const { id } = req.params;
    const newUser = req.body;
    const user = await User.findOne({
      where: { id },
    });
    if (!user) {
      res.status(404).json({ success: false, msg: 'user not found' });
    }
    await User.update(newUser, {
      where: { id },
    });
    res.status(200).json({ success: true, msg: 'username updated' });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

module.exports = { createUser, getUsers, modifyPlayer };
