const User = require("../models/user");

async function handlergetAllusers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handlegetuserbyid(req, res) {
  const user = await User.findById(req.params.id);
  return res.json(user);
}

async function handlegetuserbyid(req, res) {
  const user = await User.findById(req.params.id);
  return res.json(user);
}

async function handleupdateuserbyid(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "anuj" });
  return res.json({ status: "succerssfully updated" });
}

async function handlecreateuser(req, res) {
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
  return res.status(201).json({ msg: "Sucess", id: result._id });
}
async function handledeleteuserbyid(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "succerssfully deleted" });
}
module.exports = {
  handlergetAllusers,
  handlegetuserbyid,
  handleupdateuserbyid,
  handlecreateuser,
  handledeleteuserbyid,
};
