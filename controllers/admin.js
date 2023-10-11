// Import necessary modules and models
const Admin = require('../models/admin');

// Controller function to create a new admin
async function createAdmin(req, res, next) {
  try {
    // Extract admin data from the request body
    const { UserID, Name, Email, UserRoles, NotificationSettings } = req.body;

    // Create a new admin document
    const admin = new Admin({
      UserID,
      Name,
      Email,
      UserRoles,
      NotificationSettings,
    });

    // Save the admin document to the database
    const newAdmin = await admin.save();

    // Respond with the newly created admin
    res.status(201).json(newAdmin);
  } catch (error) {
    // Handle errors and pass them to the error handling middleware
    next(error);
  }
}

// Add more controller functions for other routes related to Admin here

module.exports = {
  createAdmin,
  // Add more controller functions here as needed
};

