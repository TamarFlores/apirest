import express from "express";
import IndexController from "../controller/indexController.js";
import TareaController from "../controller/tareaController.js";

var router = express.Router();
var indexControler = new IndexController();
var tareaController = new TareaController();


/* GET home page. */
/**
 * Endpoints de los usuarios
 * // Servicios de los usuarios
 */
router.get("/", indexControler.index);
router.get("/tarea", tareaController.getTareas);
router.post("/tarea", tareaController.createTarea);
router.put("/tarea/:id",tareaController.updateTarea);
router.delete("/tarea/:id", tareaController.deleteTarea);
export default router;
