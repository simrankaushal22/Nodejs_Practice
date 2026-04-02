const http = require("http")

const userData=[
  {
    name:'simran',
    age:30,
    email:'simran@getMaxListeners.com'
  },
  {
    name:'kaushal',
    age:40,
    email:'kaushal@gmail.com'
  },
  {
    name:'aniket',
    age:33,
    email:'aniket@gmail.com'
  },
  {
    name:'gill',
    age:18,
    email:'gill@gmail.com'
  }
]
http.createServer((req,res)=>{
  res.setHeader("Content-type","application/json")
res.write(JSON.stringify(userData))
res.end()
}).listen(2400)