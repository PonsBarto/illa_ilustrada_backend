const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updatePoduct,
} = require("../controller/productCtrl");
const router = express.Router();

router.post("/", createProduct);
router.get("/:id", getaProduct);
router.put("/:id", updatePoduct);
router.get("/", getAllProduct);

module.exports = router;
