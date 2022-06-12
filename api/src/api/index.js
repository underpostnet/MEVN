const { Router } = require('express');

const router = Router();

const pacientes = require('./pacientes');
const medicos = require('./medicos');

router.use('/pacientes', pacientes);
router.use('/medicos', medicos);

module.exports = router;
