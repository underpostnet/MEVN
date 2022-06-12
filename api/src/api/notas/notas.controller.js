const fs = require('fs');
const path = require('path');

const notas = require('./notas.services');

const notasCtrl = {};

// Find all notas
notasCtrl.findAll = async (req, res) => {
  try {
    const result = await notas.findAll();
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Find nota by id
notasCtrl.findById = async (req, res) => {
  try {
    const result = await notas.findById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Create nota
notasCtrl.create = async (req, res) => {
  try {
    console.log(req.body);
    const nota = req.body;
    const result = await notas.create(nota);
    if (!result) {
      res.status(400).json(result.errors);
    } else {
      res.json(result);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Update nota
notasCtrl.update = async (req, res) => {
  try {
    const result = await notas.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete nota
notasCtrl.delete = async (req, res) => {
  try {
    const result = await notas.delete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Edit nota
notasCtrl.edit = async (req, res) => {
  try {
    const result = await notas.edit(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = notasCtrl;
