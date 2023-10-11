const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Route for sending a notification
router.post('/notifications', notificationController.sendNotification);

// Add more routes for notification-related functionality here

module.exports = router;

