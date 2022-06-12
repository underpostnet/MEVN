const fs = require('fs');
const path = require('path');

const notes = require('./notes.services');

const notesCtrl = {};

// Find all notes
notesCtrl.findAll = async (req, res) => {
  try {
    const result = await notes.findAll();
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Find note by id
notesCtrl.findById = async (req, res) => {
  try {
    const result = await notes.findById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Create note
notesCtrl.create = async (req, res) => {
  try {
    console.log(req.body);
    const note = req.body;
    const result = await notes.create(note);
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

// Update note
notesCtrl.update = async (req, res) => {
  try {
    const result = await notes.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete note
notesCtrl.delete = async (req, res) => {
  try {
    const result = await notes.delete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Edit note
notesCtrl.edit = async (req, res) => {
  try {
    const result = await notes.edit(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = notesCtrl;
