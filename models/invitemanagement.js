const mongoose = require('mongoose');

const inviteSchema = new mongoose.Schema({
  InviteID: {
    type: String,
    required: true,
    unique: true,
  },
  ReceiverID: String, // User ID of the receiver (Investor or Employee)
  Status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Declined'],
    default: 'Pending',
  },
  Timestamp: Date,
});

const InviteManagement = mongoose.model('InviteManagement', inviteSchema);

module.exports = InviteManagement;

