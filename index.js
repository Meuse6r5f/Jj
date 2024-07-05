const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
  res.render(__dirname+'/views/index.ejs',{message: 'Hello World!'})
}) 
app.get('/haha',(req,res)=>{
  res.render(__dirname+'/views/index.ejs',{message: 'Hello World!'})
}) 
app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})