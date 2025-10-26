const express = require("express");
const router = express.Router();
const {
  createDrop,
  getAllDrops,
  getDropById,
  likeDrop,
  deleteDrop,
  dropByUser
} = require("../controllers/dropController");
const authMiddleware = require("../middlewares/authMiddleware");

// Create a new drop
router.post("/", createDrop);

// Get all drops
router.get("/", getAllDrops);

router.delete("/:id", authMiddleware, deleteDrop);

// Like a drop
router.patch("/:id/like", likeDrop);

// Get drop by ID
router.get("/:id", getDropById);



router.get("/user/:userId", dropByUser);


module.exports = router;
