// const express = require('express');
// const app = express();
import express from "express";
const app = express();

app.get("", (req, res) => {
  res.send("<h1>this is my first page./.... <h1/>");
});
app.get("/about", (req, res) => {
  res.send("this is my about page");
});
app
  .get("/contact", (req, res) => {
    res.send("<h1>this is my contact page <h1/>");
})
  app.get("/pages",(req,res)=>{
  res.send("<h1> pages </h1>")
  
})
 app.use( (req, res) => {
  
      res.send("<h1>error</h1>");

      res.status(404);
    })


  .listen(4300);
