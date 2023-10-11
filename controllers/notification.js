// Import necessary modules and models
const Notification = require('../models/notification');

// Controller function to create a new notification
async function createNotification(req, res, next) {
  try {
    // Extract notification data from the request body
    const { NotificationID, UserID, MessageType, Content, Timestamp } = req.body;

    // Create a new notification document
    const notification = new Notification({
      NotificationID,
      UserID,
      MessageType,
      Content,
      Timestamp,
    });

    // Save the notification document to the database
    const newNotification = await notification.save();

    // Respond with the newly created notification
    res.status(201).json(newNotification);
  } catch (error) {
    // Handle errors and pass them to the error handling middleware
    next(error);
  }
}

// Add more controller functions for other routes related to Notification System here

module.exports = {
  createNotification,
  // Add more controller functions here as needed
};

