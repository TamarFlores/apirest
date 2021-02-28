import TareaModel from "../models/ToDo.js";
var inittest = async () => {
  var tareamodel = new TareaModel();
  /*tareamodel.createTarea(
    " 1.Imprimir",
    " Imprimir 20 documentos",
    new Date(),
    "13:00",
    false,
  );
  tareamodel.createTarea(
    "2.Analisis PC",
    "Realizar analisis completo a las PC ",
    new Date(),
    "15:00",
    false,
  );
  tareamodel.createTarea(
    "3.Backup",
    "Realizar Backup completo a las PC",
    new Date(),
    "hora333",
    false,
  );

  console.log(await tareamodel.getTareas());*/
  //tareamodel.deleteTarea("603be916c1ebe2041ac4dc5c");

  //await tareamodel.updateModel("603be916c1ebe2041ac4dc5b", { name: "Analisis de Software" });
  //console.log(await tareamodel.getTareas());
};
inittest();
