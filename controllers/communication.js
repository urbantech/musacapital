// Import necessary modules and models
const CommunicationChannel = require('../models/communicationChannel');

// Controller function to create a new message
async function createMessage(req, res, next) {
  try {
    // Extract message data from the request body
    const { MessageID, SenderID, ReceiverID, Content, Timestamp } = req.body;

    // Create a new message document
    const message = new CommunicationChannel({
      MessageID,
      SenderID,
      ReceiverID,
      Content,
      Timestamp,
    });

    // Save the message document to the database
    const newMessage = await message.save();

    // Respond with the newly created message
    res.status(201).json(newMessage);
  } catch (error) {
    // Handle errors and pass them to the error handling middleware
    next(error);
  }
}

// Add more controller functions for other routes related to Communication Channel here

module.exports = {
  createMessage,
  // Add more controller functions here as needed
};

