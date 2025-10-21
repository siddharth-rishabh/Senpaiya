const mongoose = require('mongoose');

const pingSchema = new mongoose.Schema({
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags:[String],
    question:{
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    saves: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    
    createdAt: {
        type: Date,
        default: Date.now
    }
})