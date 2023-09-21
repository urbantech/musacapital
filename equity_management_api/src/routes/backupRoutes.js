const express = require('express');
const router = express.Router();
const backupController = require('../controllers/backup');

// Create a new backup
router.post('/', backupController.createBackup);

// Get a backup by ID
router.get('/:id', backupController.getBackupById);

// Delete a backup by ID
router.delete('/:id', backupController.deleteBackup);

// Get all backups
router.get('/', backupController.getAllBackups);

module.exports = router;

