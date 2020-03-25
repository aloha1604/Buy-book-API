const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const port = 8080;

const users = require("./routes/api/users.api");
const books = require("./routes/api/books.api");

const db = require('./config/key').mongoRI;
mongoose
.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser("abc"));

app.use("/api/users", users);
app.use("/api/books", books);


app.get('/',(req,res)=>
    res.send('hello word')
)


app.listen(port,()=> console.log('example'));