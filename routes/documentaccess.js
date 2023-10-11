const express = require('express');
const router = express.Router();
const documentAccessController = require('../controllers/documentAccessController');

// Route for accessing employee documents
router.get('/documents/:employeeId', documentAccessController.getEmployeeDocuments);

// Add more routes for document access-related functionality here

module.exports = router;

