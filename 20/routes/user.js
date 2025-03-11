const express = require("express");
const {
  handlergetAllusers,
  handlegetuserbyid,
  handleupdateuserbyid,
  handlecreateuser,
  handledeleteuserbyid,
} = require("../controllers/user");

const router = express.Router();

router.route("/").get(handlergetAllusers).post(handlecreateuser);

router
  .route("/:id")
  .get(handlegetuserbyid)
  .patch(handleupdateuserbyid)
  .delete(handledeleteuserbyid);

module.exports = router;
