// Import necessary modules and models
const Company = require('../models/company');

// Controller function to create a new company
async function createCompany(req, res, next) {
  try {
    // Extract company data from the request body
    const { CompanyID, Name, Address, FinancialReports, CompanyDocuments } = req.body;

    // Create a new company document
    const company = new Company({
      CompanyID,
      Name,
      Address,
      FinancialReports,
      CompanyDocuments,
    });

    // Save the company document to the database
    const newCompany = await company.save();

    // Respond with the newly created company
    res.status(201).json(newCompany);
  } catch (error) {
    // Handle errors and pass them to the error handling middleware
    next(error);
  }
}

// Add more controller functions for other routes related to Company here

module.exports = {
  createCompany,
  // Add more controller functions here as needed
};

