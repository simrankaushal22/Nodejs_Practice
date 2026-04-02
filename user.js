import express from 'express'
const app= express()

app.set("view engine","ejs")

app.get("/",(req,res)=>{
  res.render('user',{name:'simran',address:'shimla'})
})
app.listen(4000)