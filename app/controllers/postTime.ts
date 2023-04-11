import {Request, Response} from 'express'
const postTime = (_req: Request, res: Response): void => {
  const day = new Date()
  res.send(day)
}

export default postTime
