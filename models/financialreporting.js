const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  ReportID: {
    type: String,
    required: true,
    unique: true,
  },
  Type: {
    type: String,
    enum: ['Annual', 'Quarterly'],
  },
  Data: {
    // Define financial report data structure
  },
  Timestamp: Date,
});

const FinancialReportingTool = mongoose.model('FinancialReportingTool', reportSchema);

module.exports = FinancialReportingTool;

