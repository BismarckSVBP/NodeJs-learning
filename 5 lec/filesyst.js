const filesystem = require("fs");

//creating a file

// sync means we call synchronus calls
filesystem.writeFileSync("./5 lec/test.text", "hey there");
filesystem.writeFileSync("./test.text", "Hello bhai");

//async

// filesystem.writeFile("./test2.text","hey there 3",(err) =>{console.log("error")};);


//reading a file

const result = filesystem.readFileSync("./5 lec/contacts.text","utf-8");
console.log(result);

// filesystem.readFile("./contacts.text", "utf-8", (error, result) => {
//   if(error) {
//     console.log("Error",error);
//   }
//   else{
//     console.log(result);
//   }
// });

//adding a data

filesystem.appendFileSync("./test.text", `${Date.now()} aur bhai\n`);

// //make a copy
//filesystem.cpSync("./test.text","./abhay.text");

// //delete a file

// filesystem.unlinkSync("./abhay.text");

//to know stat of file
console.log(filesystem.statSync("./test.text").isFile());
console.log(filesystem.statSync("./test.text"));

//to make directory
// filesystem.mkdirSync("bismarck");

//do not run collectively
filesystem.mkdirSync("ilsmarck/z", { recursive: true });
