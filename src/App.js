import React, {useState, useEffect} from "react";
import "./App.css";
import FormularioTareas from "./components/FormularioTarea";
import ListaTarea from "./components/ListaTarea";

function App() {
  const [tareas, setTarea] = useState ([{ label: "", done: false }]);

/*  function  agregarTarea (tarea) {
    setTarea([tarea,...tareas]);
  }*/
 
  function eliminarTarea(id){
    setTarea(tareas.filter(tarea => tarea.id !== id));
  }

const agregarTarea = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/piterscl", {
			method: "GET",
			headers: {
				"content-type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				setTarea(
					response.map((item, index) => {
						return item;
					})
				);
			});
    };
    const crearTarea = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/piterscl", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: []
		})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
    };
    
    const updateTarea = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/piterslc", {
			method: "PUT",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(ListaTarea)
		})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
    };    

    useEffect(() => {
        agregarTarea();
        updateTarea ();    
        crearTarea ();
	}, []);
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
