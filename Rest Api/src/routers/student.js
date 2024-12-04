const express = require ("express");
const Student  = require("../models/students")

const router = new express.Router(); // 1) create a router

// router.post("/students",(req,res) => {
//     }                            // 2) define the router 

// create data
router.post("/students",async(req,res)=>{
    console.log(req.body);
    try{
        const user = new Student(req.body);
        const addStudent = await user.save();
        res.status(201).send(addStudent);
    }
    catch(err){
        res.status(400).send(err);
    }
})

// read or get data
router.get("/students",async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.status(201).send(studentsData);
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.get("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.status(201).send(studentData);
    }
    catch(err){
        res.status(400).send(err)
    }
})
router.get("/", (req,res) => {
    res.status(201).send("First Page")
});
// router.get("/students/:name",async(req,res)=>{
//     try{
//         const _name = req.params.name;
//         const studentData = await Student.findOne(_name);
//         res.status(201).send(studentData);
//     }
//     catch(err){
//         res.status(400).send(err)
//     }
// })

// Update data
router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateStudentData = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(201).send(updateStudentData);
    }
    catch(err){
        res.status(400).send(err)
    }
})

// Delete data
router.delete("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteStudentData = await Student.findByIdAndDelete(_id);
        if(!_id){
            res.status(404).send();
        }
        res.status(201).send(deleteStudentData);
    }
    catch(err){
        res.status(500).send(err)
    }
})

module.exports = router;