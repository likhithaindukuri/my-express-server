

const express=require("express")

const app=express();

app.get("/",function(req,res){
  response.send("<h1>Hello world!</h1>");
});

app.get("/contact",function(req,res){
  res.send("Contact me at: likhithaindukuri07@gmail.com");
});

app.get("/about",function(req,ref){
  res.send("My name is Likhitha");
});

app.listen(3000,function(){
  console.log("Server started at port 3000");
});
