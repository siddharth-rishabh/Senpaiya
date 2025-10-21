const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");


const{registerUser, loginUser, shadowSenpai, unShadowSenpai, getUserById, getAllUsers}= require('../controllers/userController');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/shadow',authMiddleware, shadowSenpai);

router.get('/:id', getUserById);

router.get("/", getAllUsers);

router.post("/follow", shadowSenpai);    // Follow / Shadow

router.post("/unfollow", unShadowSenpai); // Unfollow / Unshadow




module.exports = router;
