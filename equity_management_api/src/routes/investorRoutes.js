const express = require('express');
const router = express.Router();
const investorController = require('../controllers/investor');

// Create a new investor
router.post('/', investorController.createInvestor);

// Get an investor by ID
router.get('/:id', investorController.getInvestorById);

// Update an investor by ID
router.put('/:id', investorController.updateInvestor);

// Delete an investor by ID
router.delete('/:id', investorController.deleteInvestor);

// Get all investors
router.get('/', investorController.getAllInvestors);

module.exports = router;

