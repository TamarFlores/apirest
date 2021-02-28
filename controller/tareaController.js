import TareaModel from "../models/ToDo.js";
var TAREA = new TareaModel();
class TareaController {
    constructor(){}

    //servicIO AGREGAR
    async createTarea(request, response){
        var data = request.body;
        var result = await TAREA.createTarea(
            data.name,
            data.description, 
            new Date(),
            data.hour,
            data.done
        );
        response.status(200).json(result);

    }
    //MOSTRAT SERVICIOS
    async getTareas(request, response) {
        var result = await TAREA.getTareas();
        response.status(200).json(result);
    }
    //SERVICIO ACTUALIZAR
    async updateTarea(request, response) {
        var id = request.params.id;
        var updatedata = request.body;
        var result = await TAREA.updateModel(id, updatedata);
        response.status(200).json(result);

    }
//SERVICIO ELIMINAR
    async deleteTarea(request,response){
        var id =request.params.id;
        var result = await TAREA.deleteTarea(id);
        response.status(200).json(result);
    }
    //SERVICIO ACTUALIZAR LA TAREA COMO REALIZADA SOBRE EL ATRIBUTO DONE
    async updateTareaRealizada(request, response) {
        var id = request.params.id;
        var updatedata = request.body;
        var result = await TAREA.updateModel(done, updatedata);
        response.status(200).json(result);

    }
    
}
export default TareaController;