const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema({
  InvestorID: {
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
  InvestmentOverview: {
    // Define investment overview structure
  },
  DocumentRepository: [
    {
      DocID: String,
      DocumentType: String,
      Timestamp: Date,
    },
  ],
  InvestmentTracker: [
    {
      TrackID: String,
      Company: String,
      EquityPercentage: Number,
      CurrentValue: Number,
    },
  ],
});

const Investor = mongoose.model('Investor', investorSchema);

module.exports = Investor;

