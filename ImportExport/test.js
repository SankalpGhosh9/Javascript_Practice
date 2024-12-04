const add = (a,b)=>{
return a+b;
}
const name1 = "San";

const sub = (a,b)=>{
    return a-b;
    }

const mult = (a,b)=>{
return a*b;
}
module.exports.add = add;   
module.exports.sub = sub; 
module.exports.mult = mult;       
// while writing modules.export name of the variable or function must be same of that thing.

// Or  using shortcut destructor method

module.exports = {add,sub,mult,name1};