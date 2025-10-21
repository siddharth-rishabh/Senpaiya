const express = require('express');
const router = express.Router();
const { 
    createPing, 
    getAllPings, 
    toggleLikePing, 
    toggleSavePing 
} = require('../controllers/pingController');

// Create ping (only kohai)
router.post('/create', createPing);

// Get all pings
router.get('/', getAllPings);

// Like/unlike ping
router.put('/like', toggleLikePing);

// Save/unsave ping
router.put('/save', toggleSavePing);

module.exports = router;
