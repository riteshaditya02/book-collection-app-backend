const express = require('express');
const dotenv = require('dotenv').config();
const usersRoute = require('./routes/usersRoute');
const error = require('./middlewares/errorMiddlewareHandler');
const bookRouter = require('./routes/bookRoutes');
require('./config/dbConnect')();

const app = express();


//Passing Body data
app.use(express.json());

//Routes Users
app.use('/api/users', usersRoute);
//Books Routes
app.use('/api/books',bookRouter);
// console.log(process.env.JWT_SECRET_KEY)
//Error Middlware
app.use(error.errorMiddlewareHandler)

//server
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server is Up and Running ${PORT}`);
})

//riteshaditya18
//b3pcPULcAOlH6VdV
//mongodb+srv://riteshaditya18:<password>@cluster0.piyns3y.mongodb.net/