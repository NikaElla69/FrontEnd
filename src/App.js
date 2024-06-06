import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <h1 className="title">Primeiro projeto em ReactJS</h1>
      <h3>Criando os primeiros componentes</h3>
      <Button texto={"Clique aqui"} />
      <Button texto={"Abluble"} />
    </div>
  );
}

export default App;
