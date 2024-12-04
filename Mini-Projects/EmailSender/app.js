const express = require('express');
const sendEmail = require('./controllers/sendMail');
const app = express();
let PORT = 8000;
let host = "127.0.0.1";

app.get('/',(req,res)=>{
    res.send("I am server");
})


app.get('/mail',sendEmail)
const start = async () =>{
    try {
        app.listen(PORT,host,()=>{
            console.log(`Listening to port ${PORT}`)
        })
    } catch (error) {
    }
};

start();

