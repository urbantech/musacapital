const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route for creating a new admin
router.post('/admins', adminController.createAdmin);

// Add more routes for admin-related functionality here

module.exports = router;

