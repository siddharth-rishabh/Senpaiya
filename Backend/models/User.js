const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        match: /^[A-Za-z ]+$/
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true,
        // enum: ['Electronics and Communication Engineering','Computer Science Engineering','Mechanical Engineering']
    },
    batch: {
        type: String
    },
    role: {
        type: String,
        required: true,
        enum: ['senpai', 'kohai']
    },
    bio: {
        type: String
    },
    kohaiCount: {                 // counter for Kohai
        type: Number,
        default: 0
    },
    shadowedBy: [{                // to prevent multiple clicks by same Kohai
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);
