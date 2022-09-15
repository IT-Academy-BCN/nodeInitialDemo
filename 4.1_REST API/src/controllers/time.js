const time = (req, res) => { 
    const body = req.body
   
    res.json({
      fecha:  new Date().toDateString(),
      hora:  new Date().getHours()
    })
 };

 module.exports = {time}