import { NextFunction } from "connect"
import {Request, Response} from 'express'

const middle = (req: Request, res: Response, next: NextFunction) => {  
  if (!req.body.password) {
    res.status(401).send('Req.body no contiene password')    
  }
  if(req.body.password){next()}
  
}

export default middle
