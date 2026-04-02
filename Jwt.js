import cookieParser from "cookie-parser"
import express from "express"
import jwt from "jsonwebtoken"


const app= express()
app.use(cookieParser())

app.get("/",(req,res)=>{

 let token=jwt.sign({email:"simran@gmail.com"},"secret")
console.log(token);
res.cookie("data",token)
res.send("page working")
})

app.get("/read",(req,res)=>{
console.log(req.cookies.data);
//take out data from token
let data=jwt.verify(req.cookies.data,"secret")
console.log(data);

res.send("done")

})

app.listen(2800)