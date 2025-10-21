const mongoose = require("mongoose");

const dropSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
   description: {
    type: String,
    required: true,
  },
  tags: [String],

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  comments: {
    type: Number,
    default: 0,
  },
  saves: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Drop", dropSchema);
