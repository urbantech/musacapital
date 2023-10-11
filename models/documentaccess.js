const mongoose = require('mongoose');

const documentAccessSchema = new mongoose.Schema({
  DocID: {
    type: String,
    required: true,
    unique: true,
  },
  DocumentType: String,
  Timestamp: Date,
});

const DocumentAccess = mongoose.model('DocumentAccess', documentAccessSchema);

module.exports = DocumentAccess;

