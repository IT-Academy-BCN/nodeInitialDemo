const
express = require('express'),
app = express(),
{ connectMongoDB }= require('./MongoPersistence/db'),
jocAPI = require('./routes/routerMongo')


app.use(express.json())
app.use(jocAPI)

app.listen(3000, ()=>{
  console.log('server running on port 3000')
  if(process.env.NODE_ENV === 'mongo'){
    connectMongoDB()
  }
  if(process.env.NODE_ENV === 'mysql'){
    console.log('sql init')
  }
})