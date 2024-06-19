import "./App.css";
import ToDoList from "./pages/ToDoList";
import UseEffect from "./pages/UseEffect";


function App() {

  return (
    <div>
      <ToDoList pageTite={"Lista de tarefas"} />
      <UseEffect />
    </div>
  );
}

export default App;
