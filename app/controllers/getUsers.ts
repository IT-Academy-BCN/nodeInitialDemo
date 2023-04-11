import {Request, Response} from 'express'

const getUsers = (req: Request, res: Response): void => {
  res.send([{ name: "David", age: 37, pass: 123 }, `Request url: ${req.url}`])
}

export default getUsers
