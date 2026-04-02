// connect mongodb with nodejs

// import express from 'express'
// import { MongoClient } from 'mongodb';

// const dbName ="collage"
// const url ="mongodb://localhost:27017"
// const client = new MongoClient(url)

// async function dbconnection(){
// await client.connect()
// const db = client.db(dbName)
// const collection= db.collection('student')

// const result= await collection.find().toArray();
// console.log(result);

// }

// dbconnection()
// const app =express();

// app.listen(3400)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// display mongodb data on ui using nodejs and ejs

// import express from 'express'
// import { MongoClient } from 'mongodb';

// const dbName = "collage"
// const url = "mongodb://localhost:27017"
// const client = new MongoClient(url)

// const app = express();

// app.set("view engine", "ejs");

// app.get("/", async (req, res) => {

//   await client.connect()

//   const db = client.db(dbName)
//   const collection = db.collection('student')

//   const result = await collection.find().toArray();

//   res.render('students', { result })
// })

// app.listen(3400, () => {
//   console.log("Server running on 3400");
// })

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//make api with mongodb

// import express from 'express'
// import { MongoClient } from 'mongodb';

// const dbName = "collage"
// const url = "mongodb://localhost:27017"
// const client = new MongoClient(url)

// const app = express();

// app.set("view engine", "ejs");

// client.connect().then((connection)=>{
// const db=connection.db(dbName);

// app.get("/api",async(req,res)=>{
// const collection=db.collection("student")
// const student= await collection.find().toArray()
// res.send(student)
// })

// app.get("/ui",async(req,res)=>{
// const collection=db.collection("student")
// const student= await collection.find().toArray()
// res.render('students',{student})
// })

// })

// app.listen(3400)

//-------------------------------------------store data in mongodb -----------------------------------------------------------------------------------------------------------------------------

import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const dbName = "collage";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const app = express();
//middleware
app.use(express.json());
// This tells Express to translate that messy string into a clean object
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

client.connect().then((connection) => {
  const db = connection.db(dbName);

  app.get("/api", async (req, res) => {
    const collection = db.collection("student");
    const student = await collection.find().toArray();
    res.send(student);
  });
  app.get("/ui", async (req, res) => {
    const collection = db.collection("student");
    const student = await collection.find().toArray();
    res.render("students", { student });
  });

  app.get("/add", (req, res) => {
    res.render("addstudent");
  });
  app.post("/add-student", async (req, res) => {
    const collection = db.collection("student");
    const result = await collection.insertOne(req.body);

    console.log(req.body);

    res.send("data saved");
  });
  app.post("/add-student-api", async (req, res) => {
    const collection = db.collection("student");
    const result = await collection.insertOne(req.body);
    res.send(result);
  });

  app.delete("/delete/:id", async (req, res) => {
    const collection = db.collection("student");
    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    if (result) {
      res.send({
        message: "student data deleted",
        success: true,
      });
    } else {
      res.send({
        message: "student data not deleted",
        success: false,
      });
    }
  });

  app.get("/ui/delete/:id", async (req, res) => {
    const collection = db.collection("student");
    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    // console.log(req.params.id);

    if (result) {
      res.send("<h1>Student record deleted</h1>");
    } else {
      res.send("<h1>Try again</h1>");
    }
  });
app.get("/ui/student/:id",async(req,res)=>{


  const collection=db.collection("student");
  const result = await collection.findOne({
    _id:new ObjectId(req.params.id)  
  })
  res.render('update-student',{result})
})

app.get("/student-api/:id",async(req,res)=>{


  const collection=db.collection("student");
  const result = await collection.findOne({
    _id:new ObjectId(req.params.id)  
  })
 if (result) {
      res.send({
        message: "student data fetched",
        success: true,
      });
    } else {
      res.send({
        message: "student data not fetched",
        success: false,
      });
    }
})

app.post("/ui/update/:id",async(req,res)=>{

 const collection = db.collection("student");
   const filter={_id: new ObjectId(req.params.id)}
  const update={$set:req.body}
    const result = await collection.updateOne(filter,update);

    if(result){
      res.send("data updated")
    }else{
      res.send("data not updated")
    }
})


});
app.listen(6400);
