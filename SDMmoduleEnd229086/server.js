const express = require("express");
var app = express();

app.get("/",function(req,resp){
    resp.sendFile("./public/index.html",{root:__dirname});
})

app.listen(3000);

console.log("Server listening at port 3000");