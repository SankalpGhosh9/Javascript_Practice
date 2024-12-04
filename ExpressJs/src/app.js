const express = require ('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello from the express");
})

app.get("/server",(req,res)=>{
    res.send("Hello from the express:1");
})
app.get("/oki",(req,res)=>{
    res.send("<h1>Hello from the express:2</h1>");
})
app.get("/temp",(req,res)=>{
    res.send({
        id:23,
        age:15,
        name:"San"
    })
})


app.listen(8000,()=>{
    console.log("Listening to port");
})

// API
// post - create
// get - read
// put - update
// delete - delete