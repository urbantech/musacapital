const express = require('express');
const router = express.Router();
const investorController = require('../controllers/investorController');

// Route for creating a new investor
router.post('/investors', investorController.createInvestor);

// Add more routes for investor-related functionality here

module.exports = router;

