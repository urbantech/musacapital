// Import necessary modules and models
const DocumentRepository = require('../models/documentRepository');

// Controller function to create a new document entry
async function createDocument(req, res, next) {
  try {
    // Extract document data from the request body
    const { DocID, DocumentType, Timestamp } = req.body;

    // Create a new document repository entry
    const document = new DocumentRepository({
      DocID,
      DocumentType,
      Timestamp,
    });

    // Save the document repository entry to the database
    const newDocument = await document.save();

    // Respond with the newly created document entry
    res.status(201).json(newDocument);
  } catch (error) {
    // Handle errors and pass them to the error handling middleware
    next(error);
  }
}

// Add more controller functions for other routes related to Document Repository here

module.exports = {
  createDocument,
  // Add more controller functions here as needed
};

