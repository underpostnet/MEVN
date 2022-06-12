// Contiene el modelo de notes

const { Schema, model } = require('mongoose');

const NotesSchema = new Schema({
  note: {
    type: String,
  },
  title: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = model('Notes', NotesSchema);
