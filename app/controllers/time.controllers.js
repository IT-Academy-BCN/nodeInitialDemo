function getTime(req, res) {
  const { username, password } = req.body;
  const date = new Date();
  const fullDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  res.status(200).json({
    username,
    password,
    date: fullDate,
    time,
  });
}
module.exports = getTime;
