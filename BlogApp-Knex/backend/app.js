const bookshelf = require('./knex');
const express = require('express');
const app = express();
const UserRouter = require('./Users/UserRouter');
const PostRouter = require('./Posts/PostRouter');
const RegisterRouter = require('./Login/RegisterRouter');
const LoginRouter = require('./Login/LoginRouter');
const cookieParser = require('cookie-parser')

const cors = require('cors');


const PORT = 4040 

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/', UserRouter, PostRouter, RegisterRouter,  LoginRouter);

app.get('/', (req,res)=>{
        res.send('Hello Knex!')
})


app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
})