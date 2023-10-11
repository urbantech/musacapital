const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// Route for creating a new company
router.post('/companies', companyController.createCompany);

// Add more routes for company-related functionality here

module.exports = router;

