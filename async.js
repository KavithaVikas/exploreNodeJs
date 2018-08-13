console.log("Verifying set time out functions");

setTimeout(() =>{
    console.log("Execute after 3 second")
}, 3000);

var a = 5;
console.log(`The number is ${a}`);

setTimeout(()=>{
    console.log("Execute this function in 0 seconds");
}, 0);