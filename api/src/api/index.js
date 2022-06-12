const { Router } = require('express');

const router = Router();

const notes = require('./notes');

router.use('/notes', notes);

module.exports = router;
