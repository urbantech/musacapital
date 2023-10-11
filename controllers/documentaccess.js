// Import necessary modules and models
const DocumentAccess = require('../models/documentAccess');

// Controller function to grant document access to an employee
async function grantDocumentAccess(req, res, next) {
  try {
    // Extract document access data from the request body
    const { DocID, EmployeeID, DocumentType, Timestamp } = req.body;

    // Create a new document access entry
    const documentAccess = new DocumentAccess({
      DocID,
      EmployeeID,
      DocumentType,
      Timestamp,
    });

    // Save the document access entry to the database
    const newDocumentAccess = await documentAccess.save();

    // Respond with the newly created document access entry
    res.status(201).json(newDocumentAccess);
  } catch (error) {
    // Handle errors and pass them to the error handling middleware
    next(error);
  }
}

// Add more controller functions for other routes related to Document Access here

module.exports = {
  grantDocumentAccess,
  // Add more controller functions here as needed
};

