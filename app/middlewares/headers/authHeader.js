const authHeader = (req, res, next) => {

    const authenticationHeader = req.headers.authorization;

    if(!authenticationHeader) return res.status(401).json("Unauthorized");
    
    next();
  }

export default authHeader;