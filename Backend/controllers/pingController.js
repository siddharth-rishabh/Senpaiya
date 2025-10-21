const Ping = require('../models/ping');
const User = require('../models/User');

// Create a ping (only kohai)
const createPing = async (req, res) => {
    const { author, tags, question } = req.body;

    try {
        const user = await User.findById(author);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (user.role !== "kohai") {
            return res.status(403).json({ success: false, message: "Only kohais can create pings" });
        }

        const newPing = new Ping({ author, tags, question });
        await newPing.save();

        res.status(201).json({ success: true, message: "Ping created successfully", data: newPing });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all pings
const getAllPings = async (req, res) => {
    try {
        const pings = await Ping.find()
            .populate('author', 'fullName username role')
            .populate('comments')
            .sort({ createdAt: -1 });

        res.status(200).json({ success: true, data: pings });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Like or unlike a ping
const toggleLikePing = async (req, res) => {
    const { pingId, userId } = req.body;

    try {
        const ping = await Ping.findById(pingId);
        if (!ping) {
            return res.status(404).json({ success: false, message: "Ping not found" });
        }

        if (ping.likes.includes(userId)) {
            ping.likes = ping.likes.filter(id => id.toString() !== userId);
            await ping.save();
            return res.status(200).json({ success: true, message: "Unliked ping" });
        }

        ping.likes.push(userId);
        await ping.save();
        res.status(200).json({ success: true, message: "Liked ping" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Save or unsave a ping
const toggleSavePing = async (req, res) => {
    const { pingId, userId } = req.body;

    try {
        const ping = await Ping.findById(pingId);
        if (!ping) {
            return res.status(404).json({ success: false, message: "Ping not found" });
        }

        if (ping.saves.includes(userId)) {
            ping.saves = ping.saves.filter(id => id.toString() !== userId);
            await ping.save();
            return res.status(200).json({ success: true, message: "Unsaved ping" });
        }

        ping.saves.push(userId);
        await ping.save();
        res.status(200).json({ success: true, message: "Saved ping" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createPing,
    getAllPings,
    toggleLikePing,
    toggleSavePing
};
