const express = require('express');
const router = express.Router();
const inviteManagementController = require('../controllers/inviteManagementController');

// Route for sending an invite
router.post('/invites', inviteManagementController.sendInvite);

// Add more routes for invite management-related functionality here

module.exports = router;

