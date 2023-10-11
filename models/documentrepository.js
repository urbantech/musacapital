const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  DocID: {
    type: String,
    required: true,
    unique: true,
  },
  DocumentType: String,
  Timestamp: Date,
});

const DocumentRepository = mongoose.model('DocumentRepository', documentSchema);

module.exports = DocumentRepository;

