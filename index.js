const express = require('express');
const app = express();
//import the routes.js
const route = require('./routes')
const queryParams= require('./queryParams')
const middleware = require('./middleware')

//use the router module for the given path
// app.use('path',the variable which stores the route file)
app.use('/pages',route);
app.use('/query',queryParams);
app.use('/midwi',middleware);


app.get("/",(req,res)=>{
    res.send("This is my home page")
})

app.get("/about",(req,res)=>{
    res.send("This is my about page")
})

app.get("/contact",(req,res)=>{
    res.send("This is my Contact page");
})

app.post('/signup',(req,res)=>{
    // console.log(req.params);
    res.send("This is sign-up page")
})

app.put('/users/:id',(req,res)=>{
    console.log(req.params.id);
    const user = req.params.id;
    res.send(`This is put request of user ${user}`)
})

//create server using .listen
app.listen(5300,()=>{
    console.log("Server is running fine");
})
//      http://localhost:5300/