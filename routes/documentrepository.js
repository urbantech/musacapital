const express = require('express');
const router = express.Router();
const documentRepositoryController = require('../controllers/documentRepositoryController');

// Route for accessing investor documents
router.get('/documents/:investorId', documentRepositoryController.getInvestorDocuments);

// Add more routes for document repository-related functionality here

module.exports = router;

