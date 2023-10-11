const express = require('express');
const router = express.Router();
const communicationChannelController = require('../controllers/communicationChannelController');

// Route for sending a message
router.post('/messages', communicationChannelController.sendMessage);

// Add more routes for communication channel-related functionality here

module.exports = router;

