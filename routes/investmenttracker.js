const express = require('express');
const router = express.Router();
const investmentTrackerController = require('../controllers/investmentTrackerController');

// Route for tracking investments
router.post('/investments', investmentTrackerController.trackInvestment);

// Add more routes for investment tracker-related functionality here

module.exports = router;

