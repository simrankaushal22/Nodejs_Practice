import express from 'express'

const app= express()
app.set('view engine','ejs')

app.get("/mail",(req,res)=>{
res.render('mail')
  
})

app.post("/submit",(req,res)=>{
  res.send('email send')
})
app
app.listen(2300)