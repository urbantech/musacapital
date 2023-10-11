const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Route for creating a new employee
router.post('/employees', employeeController.createEmployee);

// Add more routes for employee-related functionality here

module.exports = router;

