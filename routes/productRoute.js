const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updatePoduct,
  delatePoduct,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/",authMiddleware, isAdmin, createProduct);
router.get("/:id", getaProduct);
router.put("/:id", authMiddleware, isAdmin, updatePoduct);
router.delete("/:id",authMiddleware, isAdmin,  delatePoduct);
router.get("/", getAllProduct);

module.exports = router;
