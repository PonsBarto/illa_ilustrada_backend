const express = require("express");
const {
  createPlace,
  updatePlace,
  deletePlace,
  getPlace,
  getallPlace,
} = require("../controller/placeCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createPlace);
router.put("/:id", authMiddleware, isAdmin, updatePlace);
router.delete("/:id", authMiddleware, isAdmin, deletePlace);
router.get("/:id", getPlace);
router.get("/", getallPlace);

module.exports = router;
