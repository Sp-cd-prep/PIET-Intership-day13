const express = require('express');
const routes = express.Router()
const data = require('./data');

routes.get('/bollywood',(req,res)=>{
    // res.send("This is bollywood page");

    const result = data.filter((item)=>(
        item.category === "Bollywood"
    ))
    .map((item)=>item.image);
    console.log(result.length)
    res.send(result)
})

routes.get('/hollywood',(req,res)=>{
    const result2 = data.filter((item)=>item.category==="Hollywood")
    res.send(result2); 
    
})


module.exports = routes;