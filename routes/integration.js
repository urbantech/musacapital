const express = require('express');
const router = express.Router();
const integrationModuleController = require('../controllers/integrationModuleController');

// Route for integrating with a tool
router.post('/integration-modules', integrationModuleController.integrateWithTool);

// Add more routes for integration module-related functionality here

module.exports = router;

