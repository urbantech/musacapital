const express = require('express');
const router = express.Router();
const financialReportingController = require('../controllers/financialReportingController');

// Route for generating financial reports
router.post('/financial-reports', financialReportingController.generateReport);

// Add more routes for financial reporting tool-related functionality here

module.exports = router;

