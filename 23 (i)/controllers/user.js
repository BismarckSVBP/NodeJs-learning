const { v4: uuidv4 } = require("uuid");

const User = require("../models/user");

async function handleGenerateUniqueid(req, res) {
  const { username, emailID, password } = req.body;
  await User.create({
    username,
    emailID,
    password,
  });

  if (!username | !emailID | !password) {
    return res.status(400).json({ Error: "All field are required" });
  }
  if (username == "abhay" && emailID == "k@gmail.com" && password == "K@123") {
    const uniqueID = uuidv4();
    return res.json({ Uniqueid: uniqueID });
  } else {
    return res.json({ msg: "Enter Valid Credentials" });
  }
}

module.exports = {
  handleGenerateUniqueid,
};
