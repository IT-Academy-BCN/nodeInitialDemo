import { NextFunction } from 'connect'
import {Request, Response} from 'express' 

export const setCache = (_req: Request, res: Response, next: NextFunction): void=>{  
  res.set("Cache-Control", "no-cache")
  next()
}