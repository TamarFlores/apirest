import mongoose from "../connection/connect.js";
class TareaModel {
  constructor() {
    this.Schema = mongoose.Schema;
    this.TareaSchema = new this.Schema({
      name: String,
      description: String,
      date: Date,
      hour: String,
      done: Boolean,
    });
    this.mymodel = mongoose.model("tareas",this.TareaSchema);
}
  /*} 
  CREAR TAREAS
  */
  createTarea(name, description, date, hour,done) {
    var tarea = {
      name,
      description,
      date,
      hour,
      done,
    };
    var newtarea = new this.mymodel(tarea);
    return new Promise((resolve, reject) => {
        newtarea.save().then((docs) => {
        console.log("Tarea Registrada");
        resolve(docs);
        });
    });
  }
  /* 
  LEER TAREAS
  */
  getTareas() {
      return new Promise((resolve, reject)=>{
          this.mymodel.find({}, (err,docs)=>{
              if(err) {
                  console.log(err);
                  resolve(err);
                  return;
              }
              resolve(docs);
          });
      });
  }
  /*
  ACTUALIZAR TAREAS
   */
  updateModel(id, tareaUpdate) {
    return new Promise((resolve, reject) => {
      this.mymodel.update({ _id: id }, { $set: tareaUpdate }, (err, docs) => {
        if (err) {
          console.log(err);
          resolve(err);
          return;
        }
        resolve(docs);
      });
    });
  }
  /*
  ELIMINAR TAREAS
   */
  deleteTarea(id) {
    return new Promise((resolve, reject) => {
      this.mymodel.remove({ _id: id }).then((err, docs) => {
        if (err) {
          console.log(err);
          resolve(err);
          return;
        }
        resolve(docs);
      });
    });
  }
  getModel() {
    return this.mymodel;
  }
}
export default TareaModel;