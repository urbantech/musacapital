// Import necessary modules and models
const IntegrationModule = require('../models/integrationModule');

// Controller function to create a new integration module
async function createIntegrationModule(req, res, next) {
  try {
    // Extract integration module data from the request body
    const { IntegrationID, ToolName, Description, LinkOrPath } = req.body;

    // Create a new integration module document
    const integrationModule = new IntegrationModule({
      IntegrationID,
      ToolName,
      Description,
      LinkOrPath,
    });

    // Save the integration module document to the database
    const newIntegrationModule = await integrationModule.save();

    // Respond with the newly created integration module
    res.status(201).json(newIntegrationModule);
  } catch (error) {
    // Handle errors and pass them to the error handling middleware
    next(error);
  }
}

// Add more controller functions for other routes related to Integration Module here

module.exports = {
  createIntegrationModule,
  // Add more controller functions here as needed
};

