// Contiene el modelo de notas

const { Schema, model } = require('mongoose');

const NotasSchema = new Schema({
  nota: {
    type: String,
  },
  titulo: {
    type: String
  },
  imagen: {
    type: String
  }
});

module.exports = model('Notas', NotasSchema);
