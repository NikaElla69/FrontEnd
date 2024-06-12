import "./Contadorr.css";
import Button from "./Button";
import { useState } from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);
    const handleCliqueButton = () => {
        setContador(contador + 1)
    }

    return (
        <div className="contadorContainer">
            <h2>{contador}</h2>
            <Button texto={"Contador + 1"} onClickButton={handleCliqueButton} />
        </div>
    );
}

export default Contador;