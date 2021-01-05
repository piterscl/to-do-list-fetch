import React, { useState } from "react";
import {v4 as uuid} from "uuid"; 

function FormularioTareas({agregarTarea}) {
  const [tarea, setTarea] = useState ({
    id: "",
    task: "",
    completed: false
  });

   function generarTarea (e) {
    setTarea({ ...tarea, task: e.target.value});
  }
   
   function generarEnviar (e) {
     e.preventDefault();
     if (tarea.task.trim()){
      agregarTarea({ ...tarea, id: uuid() });
      setTarea({...tarea, task:""});
     }
   }

  return (
    <form onSubmit={generarEnviar}>
      <input 
        namenChange="task"
        type="text"
        value={tarea.task}
        onChange={generarTarea}
        className="text-formx"
      />
    </form>
  );
}
export default FormularioTareas;