const { getUser2 } = require("../service/authSignup");
async function restrictTosignUpUserOnly(req, res, next) {
  const userUid = req.cookies?.uid2;
  if (!userUid) return res.redirect("/user");
  const user2 = getUser2(userUid);
  if (!user2) {
    return res.redirect("/user");
  }

  req.user2 = user2;
  next();
}

module.exports = {
    restrictTosignUpUserOnly,
};
