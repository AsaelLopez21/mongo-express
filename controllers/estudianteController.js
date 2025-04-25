const studentService = require('../services/estudianteService');

const estudianteController = {
    getAllEstudiantes: async (req,res)=>{
        try {
            const data = await studentService.getAllEstudiantes();
            return res.send({
                msg: null,
                data
            });
        } catch (error) {
            return{
                msg:error,
                data
            }
        }
    },
    addEstudiante: async (req,res)=>{
        try {
            const data = await studentService.addEstudiante(req.body);
            return res.send({
                msg:null,
                data
            })
        } catch (error) {
            return res.send({
                msg:error,
                data
            })
        }
    },
    getEstudianteById: async (req,res)=>{
        try {
          const {id} = req.params;
          const data = await studentService.getEstudianteById(id);  
          return res.send(data);
        } catch (error) {
            return res.send({
                msg:error,
                data:[]
            })
        }
    },
    updateEstudiante: async (req, res)=>{
        try {
            const {id} = req.params;
            const estudiante = req.body;

            const data = await studentService.updateEstudiante(id, estudiante);
            const updatedData = await studentService.getEstudianteById(id);
            return res.send({
                msg: null,
                data: updatedData
            })
        } catch (error) {
            return res.send({
                msg:error,
                data:[]
            })
        }
    }
};

module.exports = estudianteController;