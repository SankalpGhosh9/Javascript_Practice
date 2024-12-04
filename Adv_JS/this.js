"use strict";

// alone "this" refers to global object

console.log(this);

// in strict mode regular function gives value undefined for "this"

// when we create a object and use a method or function within the object then the "this" keyword refers to the owner object not the global object.


const a = {
    name :"San",
    age:23,
    abc:function(){
        let add = 2+2;
        console.log(add);
        console.log(this.name);
        console.log(this);
    }
}
a.abc();
