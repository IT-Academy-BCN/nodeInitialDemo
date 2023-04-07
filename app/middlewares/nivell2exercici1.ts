

const middle = (req: any, res: any, next: any) => {
  res.set("Cache-Control", "no-cache")
  res.header("Access-Control-Allow-Origin", "*")
  req.body = { name: "David", age: 37, password: "asd" }
  // console.log(req.body);
  if (!req.body.password) {
    res.status = 401
    // res.send(res.status);
  }
  next()
}

export default middle
