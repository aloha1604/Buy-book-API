const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const port = 8080;

const RouterUser = require('./routes/user.route');
const ValidateUser = require('./validate/user.validate')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.use('/api',RouterUser)

app.get('/',(req,res)=>
    res.send('hello word')
)

app.get('/api/test',ValidateUser.CheckDangnhap,(req,res,next)=>{
    res.send('day la test AIP')
})


app.listen(port,()=> console.log('example'));