const express = require("express");
const {
  mensControl,
  Access,
  getById,
  UpdateUser,
  Deleteuser,
} = require("../controller/mensControl.js");

const router = express.Router();

router.post("/register", mensControl);
router.get("/getMens", Access);
router.get("/getMens/:id", getById);
router.put("/updateUser/:id", UpdateUser);
router.delete("/deleteUser/:id", Deleteuser);
module.exports = router;
