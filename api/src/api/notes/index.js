const { Router } = require('express');
const notesCtrl = require('./notes.controller');

const router = Router();

// Find all notes
router.get('/', notesCtrl.findAll);

// Find note by id
router.get('/:id', notesCtrl.findById);

// Create note
router.post('/', notesCtrl.create);

// Update note
router.put('/:id', notesCtrl.update);

// Delete note
router.delete('/:id', notesCtrl.delete);

module.exports = router;
