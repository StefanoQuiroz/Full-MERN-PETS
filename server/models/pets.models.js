const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: [true, "El tipo es requerido"]
    },
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"]
    },
    color: {
        type: String,
        required: [true, "el color es requerido"]
    },
    tamanho : {
        type: String,
        required: [true, "El tamaño es requerido"]
    },
    fecha: {
        type: Date,
        default: Date.now
    } 
}, {timestamps: true});

const Pets = mongoose.model(`Pets`, PetSchema);

module.exports = Pets;