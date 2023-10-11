const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  UserID: {
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
  UserRoles: [String],
  NotificationSettings: {
    // Define notification settings structure
  },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

