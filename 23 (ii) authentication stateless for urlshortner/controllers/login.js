const { v4: uuidv4 } = require("uuid");

const { setUser } = require("../service/auth");

const User = require("../models/user");

async function handleLogin(req, res) {
  const { username, emailID, password, id } = req.body;
  if (!username | !emailID | !password | id) {
    return res.status(400).json({ Error: "All field are required" });
  }
  const user = await User.findOne({ username, emailID, password });
  if (!user) {
    return res.render("login", {
      Error: "Invalid Credentials...",
    });
  }
  const sessionID = uuidv4();
  setUser(sessionID, user);
  res.cookie("uid", sessionID);
  // return res.json({ Sucess: "Pass" });
  return res.redirect("urlshortner");
}

module.exports = {
  handleLogin,
};
