const express = require("express");
const routes = express.Router();

const items = [
  { id: 1, name: "Ramesh" },
  { id: 2, name: "Suresh" },
  { id: 3, name: "Mahesh" },
];

routes.get("/api", (req, res) => {
    const category = req.query.category;
    const age = req.query.age;

    console.log(req.query.category);

    if(!category){
        res.send("Category query parameter is required")
    }
  const filteritem = items.filter((item) => item.name.includes(category));
  if(age>=18){
    res.json(filteritem);
  }
  res.send("Access Denied")

});

module.exports = routes;
