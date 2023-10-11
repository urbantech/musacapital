const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  LogID: {
    type: String,
    required: true,
    unique: true,
  },
  UserID: String,
  ActivityType: String,
  Timestamp: Date,
  Details: String,
});

const ActivityLog = mongoose.model('ActivityLog', activityLogSchema);

module.exports = ActivityLog;

