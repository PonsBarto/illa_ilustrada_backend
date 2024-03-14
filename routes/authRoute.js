const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handelRefreshToken,
  logout,
  updatePassword,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/register", createUser);
router.put("/passwoed", authMiddleware, updatePassword);
router.post("/login", loginUserCtrl);
router.get("/all-users", getallUser);
router.get("/refresh", handelRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);

router.put("/edit-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
