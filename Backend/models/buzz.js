const mongoose = require('mongoose');

const buzzSchema = new mongoose.Schema({
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content:{
        type: String,
        required: true
    },
    isRead:{
        type: String,
        enum:['yes','no'],
        default:'no'
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})