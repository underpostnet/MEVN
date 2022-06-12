const Nota = require('./notas.model');

const notasService = {};

// Todos los servicios del CRUD de notas

// Find all notas
notasService.findAll = async () => {
  try {
    const result = await Nota.find();
    return result;
  } catch (err) {
    return err;
  }
};

// Find nota by id
notasService.findById = async (id) => {
  try {
    const result = await Nota.findById(id);
    return result;
  } catch (err) {
    return err;
  }
};

// Create nota
notasService.create = async (nota) => {
  try {
    const newNota = new Nota(nota);
    await newNota.save();
    return newNota;
  } catch (err) {
    return err;
  }
};

// Update nota
notasService.update = async (id, nota) => {
  try {
    const result = await Nota.findByIdAndUpdate(id, nota);
    return result;
  } catch (err) {
    return err;
  }
};

// Delete nota
notasService.delete = async (id) => {
  try {
    const result = await Nota.findByIdAndRemove(id);
    return result;
  } catch (err) {
    return err;
  }
};


module.exports = notasService;
