// Promise == future value

const bucket = ["coffee" ,"tea", "sauce","biscuits"];

const a = new Promise((resolve,reject)=>{
    if(bucket.includes("tea")&&bucket.includes("biscuits")){
        resolve("Lets do tea party");
    }
    else{
        reject("No Tea party");
    }
})

console.log(a);