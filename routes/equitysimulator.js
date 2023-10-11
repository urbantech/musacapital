const express = require('express');
const router = express.Router();
const equitySimulatorController = require('../controllers/equitySimulatorController');

// Route for running an equity simulation
router.post('/equity-simulations', equitySimulatorController.runSimulation);

// Add more routes for equity simulator-related functionality here

module.exports = router;

