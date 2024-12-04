const mongoose = require("mongoose");

//connection creation
mongoose
  .connect("mongodb://localhost:27017/testdb2")
  .then(() => console.log("connection is successfull..."))
  .catch((err) => console.log(err));

const personSchema = new mongoose.Schema({
  // here the playlistSchema is instance (object)
  name: {
    type: String,
    required: true,
  },
  age: Number,
  date_of_birth: {
    type: Date,
    default: Date.now,
  },
  active: Boolean,
});

//collection creation
const Person = new mongoose.model("Person", personSchema); // here the Person  is the  Class

//className always need to be in Capital and Collection name inside .model() always to kept in singular form and it will be converted into plural form bcoz of some Nodemodules . //Pascal convention

// ################   Create the Document             ##############################
const createDoc = async () => {
  try {
    const firstPerson = new Person({
      name: "Sankalp",
      age: 22,
      active: true,
    });
    const secondPerson = new Person({
      name: "Shanks",
      age: 28,
      active: true,
    });
    const thirdPerson = new Person({
      name: "Mugiwara",
      age: 21,
      active: true,
    });
    const result = await Person.insertMany([
      firstPerson,
      secondPerson,
      thirdPerson,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDoc();

// ################   Read or Find the Document             ##############################
const getDocument = async () => {
  try {
    const result = await Person
    // .find({age:{$gt:23}}).count();
    //.find({age:{$in:[21,22]}});   //$in ==> Matches any value in the specified array
    
    //.find({$and :[{age:24},{name:"San"}]}).countDocuments();
    
    .find({active:true}).select({name:1}).sort({name:1});
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
//getDocument();

// ################   Update the Document             ##############################
const updateDocument = async (_id) =>{
try{
const result = await Person 
.findByIdAndUpdate({_id},{
  $set: {
    name : "Sankalp Ghosh"
  }
  },{
    new:true
  });
console.log(result);
}
catch(err){
  console.log(err)
}
};

//updateDocument("66eef4440e6b3d5ee3de109d");

// ################   Delete the Document             ##############################
const deleteDocument = async (_id) =>{
  try{
  const result = await Person 
  .deleteOne({_id});
  console.log(result);
  }
  catch(err){
    console.log(err)
  }
  };
  //deleteDocument("66f1d2d6d1c206bd796d5dc9")