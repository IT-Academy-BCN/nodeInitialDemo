 const express = require('express');
 const app = express();


 app.post('/user', (req, res) => {
     const url = req.url;
     res.json({ name: "xavier", edat: 48, url: url })
 });

app.listen(3000, () => {
    console.log('ServerOk!')
});