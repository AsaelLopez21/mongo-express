const Estudiante = require('../models/estudiantes');

const estudianteService = {
    getAllEstudiantes: async() => {
        try{
            const data = await Estudiante.find();
            return{
                msg:null,
                data
            }
        }catch(err){
            console.log('error');
            return{
                msg:err,
                data:[]
            }
        }
    },

    getEstudianteById:async(id)=>{
        try {
            const data = await Estudiante.findById(id);
            return{
                msg:"no se encontro: "+id,
                data
            }
        } catch(err) {
            console.log('error');
            return{
                msg:err,
                data:[]
            };
        }
    },

    addEstudiante: async(estudianteData)=>{
        try {
            const newEstudiante = new Estudiante(estudianteData);
            const data = await newEstudiante.save();

            return{
                msg:null,
                data
            }
        } catch (error) {
            return{
                msg:error,
                data:[]
            }
        }
    },

    updateEstudiante: async (id, estudiante)=>{
        try {
            const data = await Estudiante.findByIdAndUpdate(id,estudiante);
            return{
                msg:null,
                data
            }
        } catch (error) {
            return{
                msg:error,
                data:[]
            }
        }
    },

    deleteEstudiante: async (id)=>{
        try {
            const data = await Estudiante.findByIdAndDelete(id);
            
            return{
                msg:null,
                data
            }
        } catch (error) {
            return{
                msg:error,
                data:[]
            }
        }
    }
}

module.exports = estudianteService; 