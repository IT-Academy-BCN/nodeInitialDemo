import { NextFunction } from 'connect'
import {Request, Response} from 'express' 

export const setAllowOrigin = (_req: Request, res: Response, next: NextFunction): void=>{
  res.set("Access-Control-Allow-Origin", "*")   
  next()
}