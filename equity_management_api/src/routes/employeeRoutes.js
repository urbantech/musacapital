const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee');

// Create a new employee
router.post('/', employeeController.createEmployee);

// Get an employee by ID
router.get('/:id', employeeController.getEmployeeById);

// Update an employee by ID
router.put('/:id', employeeController.updateEmployee);

// Delete an employee by ID
router.delete('/:id', employeeController.deleteEmployee);

// Get all employees
router.get('/', employeeController.getAllEmployees);

module.exports = router;

