
const router = require('express').Router();
const User = require('../database/tableUsers.js');
const bcrypt = require('bcryptjs');


router.post('/', async (req, res) => {
    const user = await User.findOne({ where: { username: req.body.username} });
    if (user) {
        const match = bcrypt.compareSync(req.body.password, user.password);
        if (match) {
            res.json({ success: 'You are in'});
        } else {
            res.json({ error: 'password or username incorrect'})
        }
    } else {
        res.json({ error: 'password or username incorrect'})
    }
});

module.exports = router;