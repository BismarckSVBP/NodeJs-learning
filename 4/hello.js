console.log("hello");

const mathematics = require("./math");

console.log("math value is ", mathematics.ram(5, 7));
// console.log("math value is ",mathematics.ravan(5,7));
// console.log("math value is ",mathematics.shyamFn(5,7));

const { ram, ravan } = require("./math");
console.log("math value is ", mathematics.ravan(5, 7));
console.log("math value is ", ram(3, 7));
