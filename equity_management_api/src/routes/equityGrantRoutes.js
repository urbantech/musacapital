const express = require('express');
const router = express.Router();
const equityGrantController = require('../controllers/equityGrant');

// Create a new equity grant
router.post('/', equityGrantController.createEquityGrant);

// Get an equity grant by ID
router.get('/:id', equityGrantController.getEquityGrantById);

// Update an equity grant by ID
router.put('/:id', equityGrantController.updateEquityGrant);

// Delete an equity grant by ID
router.delete('/:id', equityGrantController.deleteEquityGrant);

// Get all equity grants
router.get('/', equityGrantController.getAllEquityGrants);

module.exports = router;

