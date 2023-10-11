const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema({
  TrackID: {
    type: String,
    required: true,
    unique: true,
  },
  Company: String,
  EquityPercentage: Number,
  CurrentValue: Number,
});

const InvestmentTracker = mongoose.model('InvestmentTracker', trackerSchema);

module.exports = InvestmentTracker;

