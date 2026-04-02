const http = require('http');
const age=29;

const server=http.createServer((req,res)=>{
res.setHeader("content-type","text/html")
  res.write(`<h1>hello welcome nodejs <h1/>
    <h2>`+age+` <h2/>
    <h3>`+new Date+`<h3/>`)
    
  res.end()// this is use to exit current request
// process.exit()//this is use to exit whole process
})
server.listen(4800)