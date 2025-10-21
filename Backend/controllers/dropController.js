const Drop = require("../models/drop");

// ✅ Create a new Drop
const createDrop = async (req, res) => {
  try {
    const { title, description, tags, author } = req.body;

    const newDrop = new Drop({ title, description, tags, author });
    await newDrop.save();

    res.status(201).json({ success: true, drop: newDrop });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get all Drops
const getAllDrops = async (req, res) => {
  try {
    const drops = await Drop.find().populate('author').sort({ createdAt: -1 }); // newest first
    res.json(drops);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get a specific Drop by ID
const getDropById = async (req, res) => {
  try {
    const drop = await Drop.findById(req.params.id).populate('author');
    if (!drop) {
      return res.status(404).json({ success: false, message: "Drop not found!" });
    }
    res.status(200).json({ success: true, drop });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Increment / Decrement Likes (Toggle)
const likeDrop = async (req, res) => {
  try {
    const drop = await Drop.findById(req.params.id);
    if (!drop) return res.status(404).json({ message: "Drop not found" });

    drop.likes += 1;
    await drop.save();

    res.status(200).json({ likes: drop.likes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all drops by a specific user
const dropByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userDrops = await Drop.find({ author: userId }).sort({ createdAt: -1 }); // recent first
    res.status(200).json(userDrops);
  } catch (error) {
    console.error("Error fetching user drops:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


module.exports = {
  createDrop,
  getAllDrops,
  getDropById,
  likeDrop,
  dropByUser
};
