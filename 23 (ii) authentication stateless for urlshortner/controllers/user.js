const { v4: uuidv4 } = require("uuid");

const User = require("../models/user");

async function handleGenerateUniqueid(req, res) {
  const { username, emailID, password } = req.body;

  if (!username | !emailID | !password) {
    return res.status(400).json({ Error: "All field are required" });
  } else {
    const user = await User.findOne({ username, emailID, password });
    if (!user) {
      const uniqueID = uuidv4();
      await User.create({
        username,
        emailID,
        password,
      })
      return res.json({ Uniqueid: uniqueID });
      // return res.redirect("login");
    } else {
      return res.json({ msg: "You are already Sign-Up" });
    }
  }
}

module.exports = {
  handleGenerateUniqueid,
};
