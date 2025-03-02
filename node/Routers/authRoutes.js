const express = require('express');
const { registerUser } = require('../Controllers/authController.js'); // Ensure correct import

const router = express.Router();

// Signup Route
router.post('/signup', registerUser);

module.exports = router;
