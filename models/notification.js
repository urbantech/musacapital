const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  NotificationID: {
    type: String,
    required: true,
    unique: true,
  },
  UserID: String, // Receiver's User ID
  MessageType: String,
  Content: String,
  Timestamp: Date,
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;

