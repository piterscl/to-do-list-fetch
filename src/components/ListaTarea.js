import React from "react";
import Tarea from "./Tarea";

function ListaTarea ({tareas, eliminarTarea}) {
return (
  <div>
    {tareas.map(tarea => (
      <Tarea key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} />
    ))}
  </div>
);
}
export default ListaTarea;