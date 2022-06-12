const note = require('./notes.model');

const notesService = {};

// Todos los servicios del CRUD de notes

// Find all notes
notesService.findAll = async () => {
  try {
    const result = await note.find();
    return result;
  } catch (err) {
    return err;
  }
};

// Find note by id
notesService.findById = async (id) => {
  try {
    const result = await note.findById(id);
    return result;
  } catch (err) {
    return err;
  }
};

// Create note
notesService.create = async (note) => {
  try {
    const newnote = new note(note);
    await newnote.save();
    return newnote;
  } catch (err) {
    return err;
  }
};

// Update note
notesService.update = async (id, note) => {
  try {
    const result = await note.findByIdAndUpdate(id, note);
    return result;
  } catch (err) {
    return err;
  }
};

// Delete note
notesService.delete = async (id) => {
  try {
    const result = await note.findByIdAndRemove(id);
    return result;
  } catch (err) {
    return err;
  }
};


module.exports = notesService;
