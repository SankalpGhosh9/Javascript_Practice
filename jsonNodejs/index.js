const bio ={
    name:"San",
    age: 23,
    loaction: "Mumbai",
    status:"Learning NodeJs"
}
const jsOnData = JSON.stringify(bio);
console.log(jsOnData); 
// javascript object can be converted to JSOn using stringify but json cannot be called directly from the object
// eg :-
console.log(jsOnData.name);// it will show undefined value

//similarly json can be converted into a normal javascript object using  the JSON.parse function
// eg :-
const objData = JSON.parse(jsOnData);
console.log(objData);
