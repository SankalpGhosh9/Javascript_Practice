const path = require ("path");
const express = require ("express");
const app = express();
const port = 9000;

//giving absolute path
const staticPath = path.join(__dirname, "../public");

//inbuilt  middleware function
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
})