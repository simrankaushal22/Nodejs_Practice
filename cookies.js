import cookieParser from "cookie-parser";
import express from "express"

const app = express();
app.use(cookieParser())

app.get("/",(req,res)=>{
res.cookie("name","simrankaushal")
res.send("done")
})

app.get("/read",(req,res)=>{
  console.log(req.cookies);
  
res.send("reading data done")
})
app.listen(3400)