const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updatePoduct,
  delatePoduct,
} = require("../controller/productCtrl");
const router = express.Router();

router.post("/", createProduct);
router.get("/:id", getaProduct);
router.put("/:id", updatePoduct);
router.delete("/:id", delatePoduct);
router.get("/", getAllProduct);

module.exports = router;
