// Import necessary modules
const { firestore } = require('../config/firebase'); // Assuming you're using 
Firestore

// Function to create a new employee
async function createEmployee(req, res, next) {
  try {
    // Extract employee data from the request body
    const { name, email, role } = req.body;

    // Validate request data
    if (!name || !email || !role) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new employee document in Firestore
    const employeeRef = await firestore.collection('employees').add({
      name,
      email,
      role,
    });

    // Get the ID of the newly created employee
    const employeeId = employeeRef.id;

    // Respond with a success message and the ID of the new employee
    return res.status(201).json({ message: 'Employee created successfully', 
employeeId });
  } catch (error) {
    // Handle errors and pass them to the error handling middleware
    return next(error);
  }
}

// More controller functions for other employee routes can be added here

// Export the controller functions
module.exports = {
  createEmployee,
  // Add more controller functions here as needed
};
