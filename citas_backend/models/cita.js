// Crea el archivo cita.js en la carpeta "modelos"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citaSchema = new Schema({
  nombre_dueño: {
    type: String,
    trim: true
  },
  nombre_mascota: {
    type: String,
    trim: true
  },
  tipo_mascota: {
    type: String,
    trim: true
  },
  raza: {
    type: String,
    trim: true
  },
  numero_contacto: {
    type: Number,
    trim: true
  },
  motivo_cita: {
    type: String,
    trim: true
  },
  tipo_cita: {
    type: String, 
    trim: true
  }
});

const Cita = mongoose.model('Cita', citaSchema);

module.exports = Cita;