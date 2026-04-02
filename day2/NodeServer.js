//normal function


// const http = require('http');

// function requestListener(req,res){
//   console.log(req);
  
// }
// http.createServer(requestListener)


// with anonymous fucnction



// const http= require('http');

// const Server=http.createServer((req,res)=>{
//   console.log(req);
  
// })
// Server.listen(3001)


//diffrent way of calling port with direct link


const http= require('http');

const Server=http.createServer((req,res)=>{
  console.log(req);
  
})
const PORT=3000
Server.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`);
  
})


// const http = require('http')

// http.createServer((req,res)=>{
//  res.write("this is my server")// when we have large data
  
// res.end('hello')
// }).listen(4000)
