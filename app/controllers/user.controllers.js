const { User } = require('../db/db.connect');

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

module.exports = { createUser };
