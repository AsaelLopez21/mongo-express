const express = require('express');
const estudianteController = require('../controllers/estudianteController')

const ruta = express.Router();

ruta.get('/',estudianteController.getAllEstudiantes);
ruta.post('/',estudianteController.addEstudiante);

module.exports = ruta;