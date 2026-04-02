// import express from 'express'
// const  app=express();

// function ageCheck(req,res,next){
//   if(!req.query.age||req.query.age<18){
//     res.send("you can not acess this page")
//   }else{
//     next();
//   }
// }

// app.use(ageCheck)
// app.get("/",(res,req)=>{
//   req.send("<h1>home page</h1>")
// })

// app.get("/login",(res,req)=>{
//   req.send("<h1>login page</h1>")
// })
// app.listen(2000)

// route midleware means when u have to put middleware in specific routes

// import express from "express";

// const app = express();

// function check(req, res, next) {
//   if (!req.query.age || req.query.age < 18) {
//     res.send("you are noy allowed to used this website");
//   } else {
//     next();
//   }
// }
// app.get("/", (req, res) => {
//   res.send("home page");
// });
// app.get("/about", check, (req, res) => {
//   res.send("about page");
// });

// app.get("/products", (req, res) => {
//   res.send("products");
// });

// app.get("/login", (req, res) => {
//   res.send("login");
// });

// app.listen(8700);


//with two middleware 

import express from "express";

const app = express();

function check(req, res, next) {
  if (!req.query.age || req.query.age < 18) {
    res.send("you are noy allowed to used this website");
  } else {
    next();
  }
}
function checkout(req, res, next) {
  if (!req.query.age || req.query.age < 18) {
    res.send("you are not allowed");
  } else {
    next();
  }
}


app.get("/", checkout,(req, res) => {
  res.send("home page");
});
app.get("/about", check,checkout, (req, res) => {
  res.send("about page");
});

app.get("/products", (req, res) => {
  res.send("products");
});

app.get("/login", (req, res) => {
  res.send("login");
});

app.listen(8700);
