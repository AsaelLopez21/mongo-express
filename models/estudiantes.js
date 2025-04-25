const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String
    },
    matricula: {
        type: Number,
    },
    cursos: {
        type: [String],
        default:[]
    }
}, { timestamps: true });

const Estudiante = mongoose.model('estudiante', estudianteSchema);
module.exports = Estudiante;