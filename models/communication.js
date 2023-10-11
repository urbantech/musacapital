const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  MessageID: {
    type: String,
    required: true,
    unique: true,
  },
  SenderID: String, // User ID of the sender (Company or Investor)
  ReceiverID: String, // User ID of the receiver (Company or Investor)
  Content: String,
  Timestamp: Date,
});

const CommunicationChannel = mongoose.model('CommunicationChannel', messageSchema);

module.exports = CommunicationChannel;

