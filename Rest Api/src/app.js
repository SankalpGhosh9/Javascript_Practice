const express = require ("express");
const app = express();
require("./db/conn");
const PORT = process.env.PORT || 6000;
const StudentRouter = require("./routers/student")


app.use(express.json());
app.use(StudentRouter); // register the router


app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
})



