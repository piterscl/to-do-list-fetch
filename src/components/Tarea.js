import React from "react";

function Tarea ({ tarea, eliminarTarea }){
 
  function borrarTareaClick () {
    eliminarTarea(tarea.id);
  }
 
  return (
  <div className="tareas">
    <div className="tarea-nueva">{tarea.label}</div>
    <div className="cerrar" onClick={borrarTareaClick}>x</div>
  </div>
 );
}
export default Tarea;
