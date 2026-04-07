// import cookieParser from "cookie-parser";
// import express from "express"

// const app = express();
// app.use(cookieParser())

// app.get("/",(req,res)=>{
// res.cookie("name","simrankaushal")
// res.send("done")
// })

// app.get("/read",(req,res)=>{
//   console.log(req.cookies);
  
// res.send("reading data done")
// })
// app.listen(3400)


//  import express from 'express'

//  const app = express();
// app.set("view engine","ejs")
// app.use(express.urlencoded({extended:true}))

//  app.get("/login",(req,res)=>{

//   res.render('login')
//  })

//  app.post("/profile",(req,res)=>{
//   res.setHeader('set-cookie','login=true')
//     res.setHeader('set-cookie',"name="+req.body.name)
// res.render('profile')
//  })

//   app.get("/",(req,res)=>{
// let cookiesData=req.get('cookie')

// cookiesData=cookiesData.split(';')

// cookiesData=cookiesData[2].split("=")

// console.log(cookiesData[2]);


// res.render('home',{name:cookiesData[1]})
//  })
//  app.listen(3200)




//wirh cookie-parser

import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

// middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 🔹 Login Page
app.get("/login", (req, res) => {
  res.render('login');
});

// 🔹 Handle Login Form (POST)
app.post("/profile", (req, res) => {
  const { name } = req.body;

  // set cookies
  res.cookie("login", true);
  res.cookie("name", name);

  res.render('profile', { name });
});

// 🔹 Home Page (Read Cookie)
app.get("/", (req, res) => {
  const name = req.cookies.name || "Guest";

  console.log("Cookie Name:", name);

  res.render('home', { name });
});

// server
app.listen(3200, () => {
  console.log("Server running on port 3200");
});
