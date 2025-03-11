const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");
//middleware
app.use(express.urlencoded({ extended: false }));
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
app.listen(3003, () => {
  console.log("Server chalu ho gya");
});

// app.patch("/api/users/edit/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const body = req.body;
//   const user = users.find((user) => {
//     user.id = body.id;
//     user.email = body.email;
//     user.gender = body.gender;
//     user.job_title = body.job_title;
//     user.Last_name = body.Last_name;
//     user.first_name = body.first_name;
//   });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     return res.json({ Status: " Success", id: users.length });
//   });
// });
// app.get("/api/users/edited/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });