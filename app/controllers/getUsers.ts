const getUsers = (req: any, res: any): void => {
  res.send([{ name: "David", age: 37, pass: 123 }, `Request url: ${req.url}`])
}

export default getUsers
