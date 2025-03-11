const express = require("express");
const mongoose = require("mongoose");
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
//above middleware works as
//req.body=processing

// conection of mongoose
mongoose
  .connect("mongodb://localhost:27017/bismarck3")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log("Mongo error", err));

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

app.post("/api/users/post", async (req, res) => {
  const body = req.body;
  if (
    !body.email ||
    !body.gender ||
    !body.first_name ||
    !body.Last_name ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are req..." });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.Last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log("result", result);
  return res.status(201).json({ msg: "Sucess" });
});

app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
    <ul>
    ${allDbUsers
      .map((user) => `<li>${user.firstName} _ ${user.email}</li>`)
      .join("")}
    </ul>
    `;
  return res.send(html);
});

app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});

app.get("/api/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.json(user);
});

app.route("/patch/:id").patch(async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { lastName: "anuj" });
  return res.json({ status: "succerssfully updated" });
});
app.route("/delete/:id").patch(async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "succerssfully deleted" });
});

app.listen(3009, () => {
  console.log("Server chalu ho gya");
});
