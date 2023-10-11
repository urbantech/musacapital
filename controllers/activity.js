// Import necessary modules and models
const ActivityLog = require('../models/activityLog');

// Controller function to create a new activity log
async function createActivityLog(req, res, next) {
  try {
    // Extract activity log data from the request body
    const { LogID, UserID, ActivityType, Timestamp, Details } = req.body;

    // Create a new activity log document
    const activityLog = new ActivityLog({
      LogID,
      UserID,
      ActivityType,
      Timestamp,
      Details,
    });

    // Save the activity log document to the database
    const newActivityLog = await activityLog.save();

    // Respond with the newly created activity log
    res.status(201).json(newActivityLog);
  } catch (error) {
    // Handle errors and pass them to the error handling middleware
    next(error);
  }
}

// Add more controller functions for other routes related to Activity Log here

module.exports = {
  createActivityLog,
  // Add more controller functions here as needed
};

