const express = require('express');
const estudianteController = require('../controllers/estudianteController')

const ruta = express.Router();

ruta.get('/',estudianteController.getAllEstudiantes);
ruta.post('/',estudianteController.addEstudiante);
ruta.get('/:id',estudianteController.getEstudianteById);
ruta.put('/:id',estudianteController.updateEstudiante);
ruta.delete('/:id',estudianteController.deleteEstudiante);

module.exports = ruta;