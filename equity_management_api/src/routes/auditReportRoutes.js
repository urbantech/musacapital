const express = require('express');
const router = express.Router();
const auditReportController = require('../controllers/auditReport');

// Create a new audit report
router.post('/', auditReportController.createAuditReport);

// Get an audit report by ID
router.get('/:id', auditReportController.getAuditReportById);

// Delete an audit report by ID
router.delete('/:id', auditReportController.deleteAuditReport);

// Get all audit reports
router.get('/', auditReportController.getAllAuditReports);

module.exports = router;

