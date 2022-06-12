const { Router } = require('express');
const notasCtrl = require('./notas.controller');

const router = Router();

// Find all notas
router.get('/', notasCtrl.findAll);

// Find nota by id
router.get('/:id', notasCtrl.findById);

// Create nota
router.post('/', notasCtrl.create);

// Update nota
router.put('/:id', notasCtrl.update);

// Delete nota
router.delete('/:id', notasCtrl.delete);

module.exports = router;
