// Import necessary modules and models
const Investor = require('../models/investor');

// Controller function to create a new investor
async function createInvestor(req, res, next) {
  try {
    // Extract investor data from the request body
    const { InvestorID, Name, Email, InvestmentOverview, DocumentRepository, InvestmentTracker } = req.body;

    // Create a new investor document
    const investor = new Investor({
      InvestorID,
      Name,
      Email,
      InvestmentOverview,
      DocumentRepository,
      InvestmentTracker,
    });

    // Save the investor document to the database
    const newInvestor = await investor.save();

    // Respond with the newly created investor
    res.status(201).json(newInvestor);
  } catch (error) {
    // Handle errors and pass them to the error handling middleware
    next(error);
  }
}

// Add more controller functions for other routes related to Investor here

module.exports = {
  createInvestor,
  // Add more controller functions here as needed
};

