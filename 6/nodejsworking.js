//by default thread pool size =4;
//max thread can be create on that basis that how many cpu core in our system 
//we should always write non blocking code so our user will not wait 



const filesystem = require("fs");

const operatingsystem = require('os');

console.log(operatingsystem.cpus().length);
//reading a file
// sync means we call synchronus calls..//blocking
console.log(1);
const result = filesystem.readFileSync("./6/contacts.text","utf-8");
console.log(result);
console.log(2);
// //async...//non-blocking
console.log(3);
filesystem.readFile("./6/contacts.text", "utf-8", (error, result) => {
  if(error) {
    console.log("Error",error);
  } 
  else{
    console.log(result);
  }
});
console.log(4);
