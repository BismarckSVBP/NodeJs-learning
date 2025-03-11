const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");
//middleware
app.use(express.urlencoded({ extended: false }));
//above middleware works as
//req.body=processing

app.use((req, res, next) => {
  console.log("Hello from middleware 1");
  // return res.json({status:"return from middleware 1"});
  next();
});
app.use((req, res, next) => {
  console.log("Hello from middleware 2");
  //we can make changes through middleware
  req.myUser = "bismarck@gmail.com";
  next();
});

app.use((req, res, next) => {
  //we can access the changes through middleware
  console.log("Hello from middleware 2", req.myUser);
  next();
});

app.use((req, res, next) => {
  fs.appendFile(
    "logdetails.txt",
    `\n${Date()} : ${req.method} :: ${req.ip}: ${req.path}`,
    (err, data) => {
      next();
    }
  );
});
//task-1
//for browers in form of html
app.get("/users", (req, res) => {
  const html = ` 
    <ul> 
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  return res.send(html);
});

//Rest api
app.get("/api/users", (req, res) => {
  return res.json(users);
});

//task-2
//for browers in form of html
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const html = users.find((html) => html.id === id);
  return res.send(html);
});

//Rest api
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

//post method-1
// app.post("/api/users/post", (req, res) => {
//   const id = users.length;
//   const body = req.body;
//   users.push({
//     id: id+1,
//     email: body.email,
//     gender: body.gender,
//     first_name: body.first_name,
//     Last_name: body.Last_name,
//     job_title: body.job_title,
//   });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     if (err) {
//       console.log("error");
//     } else {
//       console.log(data);
//       res.json({ kaam: "abhi karna baaki hai" });
//     }
//   });
// });

//post method-2
app.post("/api/users/post", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ Status: "Success", id: users.length });
  });
});

//delete from last
app.delete("/api/users/delete", (req, res) => {
  users.pop({ id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ Status: "Delete Success", id: users.length });
  });
});
app.listen(3004, () => {
  console.log("Server chalu ho gya");
});
