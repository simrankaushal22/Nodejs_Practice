import express from 'express'
const app= express();

function checkRoute(res,req,next){
  console.log(req.url);
  next()
}
app.use(checkRoute)


app.get("/",(req,res)=>{
  res.send("Home Page")
})

app.get("/users",(req,res)=>{
  res.send("users Page")
})

app.get("/products",(req,res)=>{
  res.send("products Page")
})
app.listen(3000)