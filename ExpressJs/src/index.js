const express = require("express");
const app = express();
const path = require ("path");
const hbs = require("hbs");

const port = 3200;
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

//  ### we use middleware to talk or do operations between request and response.
//  ### we use handlebars to set dynamic values to the static html , we can also use (ejs,pug) for the same task.

//to set the view engine

app.set('view engine', 'hbs');  // to set the view engine as default
app.set('views',templatePath);  // to set the view engine as different templatePath


//to use partials ==> partials are similiar  as Component in React but provide dynamic data 
hbs.registerPartials(partialsPath)




//template engine route
app.get("/",(req,res)=>{
    res.render("index")
})

// app.get("/about",(req,res)=>{
//     console.log(req.query.name) //Query strings
//     res.render("about")
// })
app.get("/about",(req,res)=>{
    res.render("about",{
      name:req.query.name,
      age:req.query.age
    })
})
app.use(express.static(staticPath)) //middleware


app.get('*',(req,res)=>{
 res.render("404")
})
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})