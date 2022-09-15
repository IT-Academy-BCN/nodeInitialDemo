"use strict";

// Configuració del Middleware per fer el control del caché (mètodes "POST", CORS)
  
let cacheMiddleware = (req,res,next)=>{
  if (req.method == 'POST') {
    res.set("Cache-control", "No-cache");
} else {
    res.set("Cache-control", "No-store");
}
next();
}
    
module.exports = cacheMiddleware;