const express = require("express")
const routes = express.Router()

const middleware1 = (req, res, next) => {
    console.log("middleware one is running")
    if(!req.query.age){
      res.send("please provide the age");
    }
    else if(req.query.age<18){
      res.send("you can't access the page ")
    }
    else{
      next();
    }
}
// const middleware2 = (req, res, next) => {
//     console.log("middleware two is running")
//     next();
// }

// routes.use(middleware1)  // application level middleware

// routes.use(middleware2)

routes.get("/login",middleware1, (req, res) => {
  res.send("welcome to login page")
})
routes.get("/register", (req, res) => {
    res.send("welcome to register page")
  })
  
  routes.get("/article", (req, res) => {
    res.send("This is article page")
  })

module.exports = routes;
