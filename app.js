const
express = require('express'),
app = express(),
{ connectMongoDB }= require('./MongoPersistence/db')




app.listen(3000, ()=>{
  console.log('server running on port 3000')
  connectMongoDB()
})