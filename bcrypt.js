import express from "express"
 import bcrypt from "bcrypt"
const app= express()

// incrypt message
app.get("/",(req,res)=>{
//   res.send("page is woking")
// // To hash a password:
// // Technique 1 (generate a salt and hash on separate function calls):-
      
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("myPlaintextPassword", salt, function(err, hash) {
      console.log(salt);
         console.log(hash);//  to see is it working or not we use log but bcrypt store hash password in your db
      // Store hash in your password DB.
    });
});

})




//campair hash pasword and orgignal password (decrypt message)
app.get("/app",(req,res)=>{
  res.send(" woking")

      
// To check a password:
// Load hash from your password DB.
bcrypt.compare("simran@123","$2b$10$p0hMRrnJR0FB/I9VE2MsvOEDwo4R7hnz2saaDP5Bovz07IOS2QN/y", function(err, result) {

console.log(result);
  
    // result == true or false
});
  
})
app.listen(1200)

//  $2b$10$DejTy0B48BNMz0bfuq8o6u0jKxYsGyZBW6NG010tNLFnQh0zLjflC   :myPlaintextPassword