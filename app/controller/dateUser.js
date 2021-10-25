//
const dateUser = (req, res, next) => {
  const {
    nick
  } = req.body

  if (!nick) {
    return next(res.status(400).json({
      Error: "Enter the details, please"
    }))
  }
  const date = new Date()

  const objDateUser = {
    nick,
    date: date
  }
  res.status(200).json({
    objDateUser

  })
}

module.exports = dateUser;