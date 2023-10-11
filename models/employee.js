const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  EmployeeID: {
    type: String,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  EquityOverview: {
    // Define equity overview structure
  },
  DocumentAccess: [
    {
      DocID: String,
      DocumentType: String,
      Timestamp: Date,
    },
  ],
  VestingSchedule: {
    // Define vesting schedule structure
  },
  TaxCalculator: {
    // Define tax calculator structure
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

