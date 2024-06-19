import { useEffect, useState } from "react";

const UseEffect = () => {
    const [myState, setMyState] = useState();

    //montagem do componente
    useEffect(() => {
        console.log("UseEffect execultado na montagem do componente");
    }, [])

    //atualização do componente
    useEffect(() => {
        console.log("UseEffect execultado na montagem e atualização do componente");
    }, [myState])

    //desmontagem do componente
    useEffect(() => {
        return () => {
            console.log("Função execultada na desmontagem do componente");
        }
    }, [])

    const updateMyState = () => {
        setMyState("My new myState")
    }

    return (
        <div>
            <button onClick={updateMyState}>Disparar UseEffect</button>
        </div>
    );
}

export default UseEffect;