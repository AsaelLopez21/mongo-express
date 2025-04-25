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
    }
};

module.exports = estudianteController;