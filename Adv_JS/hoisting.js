sum(5,9);

// normal function can be called before its declared 

function sum(a,b){
    add = a+b;
    console.log(add);
}

// but variable declarations and function declarations which are stored inside a variable are unable to do hoisting as the execution context and execution stack changes. 
const a0 = (a,b)=>{
 add = a+b;
 console.log(add);
}
a0(45,87);

var a = 10;
console.log(a);
var a = 20;

// Hoisting works only on var = keyword  and not let , const 


console.log("I am a " + job);
var job = "Web Developer";
console.log("I am a " + job);

function whoAmI(){
    console.log("I am a " + job);
    var job = "AWS Developer";
    console.log("I am a " + job);
}
whoAmI();