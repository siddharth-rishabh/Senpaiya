const express = require("express");
const router = express.Router();
const {
  createDrop,
  getAllDrops,
  getDropById,
  likeDrop,
  dropByUser
} = require("../controllers/dropController");
const authMiddleware = require("../middlewares/authMiddleware");

// Create a new drop
router.post("/", createDrop);

// Get all drops
router.get("/", getAllDrops);

// Get drop by ID
router.get("/:id", getDropById);

// Like a drop
router.patch("/:id/like", likeDrop);

router.get("/user/:userId", dropByUser);


module.exports = router;
