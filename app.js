const
express = require('express'),
app = express(),
jocAPI = require('./routes/router')
require('./connectionDB')

app.use(express.json())
app.use(jocAPI)
app.listen(3000, ()=>{
  console.log('server running on port 3000')
})