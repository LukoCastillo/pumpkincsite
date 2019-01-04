const express = require('express');
const PORT = process.env.PORT || 5000
const app = express()
const path = require('path')

app.use(express.static('public'))

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.listen(PORT, () => {
    console.log(__dirname);
    console.log('http://localhost:' + PORT);
})