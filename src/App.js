import "./App.css";
import Button from "./components/Button";
import Contador from "./components/Contadorr";


function App() {
  const handleCliqueAqui = () => {
    console.log("Botão 'clique aqui' clicado");
  }

  const handleAbluble = () => {
    console.log("Botão 'abluble' clicado");
  }

  return (
    <div>
      <h1 className="title">Primeiro projeto em ReactJS</h1>
      <h3>Criando os primeiros componentes</h3>
      <Button texto={"Clique aqui"} onClickButton={handleCliqueAqui} />
      <Button texto={"Abluble"} onClickButton={handleAbluble} />
      <Contador />
    </div>
  );
}

export default App;
