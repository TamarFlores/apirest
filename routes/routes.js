import express from "express";
import IndexController from "../controller/indexController.js";
import TareaController from "../controller/tareaController.js";

var router = express.Router();
var indexControler = new IndexController();
var tareaController = new TareaController();



router.get("/", indexControler.index);
router.get("/tarea", tareaController.getTareas);
router.post("/tarea", tareaController.createTarea);
router.put("/tarea/:id",tareaController.updateTarea);
router.delete("/tarea/:id", tareaController.deleteTarea);
router.put("/tarea/:done",tareaController.updateTareaRealizada);
export default router;
