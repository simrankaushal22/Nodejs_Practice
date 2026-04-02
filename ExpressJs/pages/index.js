import express from 'express';
import home from './home.js'
import about, { contact } from './about.js';

const app=express()

app.get("",(req,res)=>{
  res.send(home())
})
app.get("/about",(req,res)=>{
  res.send(about())
})
app.get("/contact",(req,res)=>{
  res.send(contact())
})

app.listen(2400)