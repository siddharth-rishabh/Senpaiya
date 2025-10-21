const { json } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const Drop = require('../models/drop');

// Register User
const registerUser = async (req, res) => {
    try {
        const {
            fullName,
            username,
            email,
            password,
            branch,
            batch,
            role,
            bio
        } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: "User already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fullName,
            username,
            email,
            password: hashedPassword,
            branch,
            batch,
            role,
            bio,
            kohaiCount: 0,          // initialize kohai count
            shadowedBy: []          // initialize array to track which kohai already clicked
        });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, "supersecret", { expiresIn: "1h" });

        return res.status(201).json({ success: true, message: 'User created successfully', token });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Password is incorrect" });
        }

        const token = jwt.sign({ id: user._id }, "supersecret", { expiresIn: "1h" });

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                username: user.username,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Shadow (Follow) a Senpai
const shadowSenpai = async (req, res) => {
  try {
    const { senpaiId, kohaiId } = req.body;

    if (senpaiId === kohaiId) {
      return res.status(400).json({ message: "You cannot shadow yourself" });
    }

    const senpai = await User.findById(senpaiId);
    const kohai = await User.findById(kohaiId);

    if (!senpai || !kohai) {
      return res.status(404).json({ message: "User not found" });
    }

    if (senpai.shadowedBy.includes(kohaiId)) {
      return res.status(400).json({ message: "Already shadowing this Senpai" });
    }

    senpai.shadowedBy.push(kohaiId);
    senpai.kohaiCount += 1;
    await senpai.save();

    res.status(200).json({ message: "Now shadowing this Senpai" });
  } catch (error) {
    console.error("Follow error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ❌ Unshadow (Unfollow) a Senpai
const unShadowSenpai = async (req, res) => {
  try {
    const { senpaiId, kohaiId } = req.body;

    const senpai = await User.findById(senpaiId);
    const kohai = await User.findById(kohaiId);

    if (!senpai || !kohai) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!senpai.shadowedBy.includes(kohaiId)) {
      return res.status(400).json({ message: "You are not shadowing this Senpai" });
    }

    senpai.shadowedBy = senpai.shadowedBy.filter(
      (id) => id.toString() !== kohaiId.toString()
    );
    senpai.kohaiCount = Math.max(0, senpai.kohaiCount - 1);
    await senpai.save();

    res.status(200).json({ message: "Unshadowed this Senpai" });
  } catch (error) {
    console.error("Unfollow error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// Get User by ID (with kohai count)
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select(
            "fullName username branch batch kohaiCount shadowedBy bio role"
        );

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const dropsCount = await Drop.countDocuments({ author: id });

        res.status(200).json({
            success: true,
            data: { ...user.toObject(), drops: dropsCount }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getAllUsers = async (req, res) => {
  try {
    // Fetch only senpai users
    const users = await User.find({ role: "senpai" }).select(
      "fullName username branch batch kohaiCount bio shadowedBy role"
    );

    const usersWithDrops = await Promise.all(
      users.map(async (user) => {
        const dropsCount = await Drop.countDocuments({ author: user._id });
        return { ...user.toObject(), drops: dropsCount };
      })
    );

    res.status(200).json({ success: true, data: usersWithDrops });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
};

module.exports = { registerUser, loginUser, shadowSenpai, unShadowSenpai, getUserById, getAllUsers };
