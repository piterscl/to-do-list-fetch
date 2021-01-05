import React, {useState} from "react";
import "./App.css";
import FormularioTareas from "./components/FormularioTarea";
import ListaTarea from "./components/ListaTarea";

function App() {
  const [tareas, setTarea] = useState ([]);

  function  agregarTarea (tarea) {
    setTarea([tarea,...tareas]);
  }
 
  function eliminarTarea(id){
    setTarea(tareas.filter(tarea => tarea.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>tareas</h1>
        <FormularioTareas agregarTarea={agregarTarea} />
        <ListaTarea tareas={tareas} eliminarTarea={eliminarTarea}/>
              {(() => {
        if (tareas >= 0) {
          return (
            <div>No tasks, add a task</div>
          )
        } else {
          return (
            <div>{tareas.length} tareas pendientes</div>
          )
        }}
      )()}
      </header>
    </div>
  );
}

export default App;
