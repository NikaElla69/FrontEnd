import { useEffect, useState } from "react";
import "./SimuleteApi.css";
import { Link } from "react-router-dom";

const infoCampoMourao = {
    dataCriacao: '10/10/1947',
    nome: "Campo Mourão",
    qtdHabitantes: 99000,
    universidades: [
        "Integrado",
        "UTFPR",
        "Unicampo",
        "Unicesumar",
        "Unoeste",
    ],
}

const SimuleteApi = () => {

    const [info, setInfo] = useState();

    useEffect(() => {
        setTimeout(() => {
            setInfo(infoCampoMourao)
        }, 1000)
    }, [])
    return (
        <div className="container">
            <Link to={"/todolist"}>
                Ir para lista de tarefas
            </Link>
            {
                info ? <div>
                    <h3>{info.nome}</h3>
                    <h4>{info.dataCriacao}</h4>
                    <h4>{info.qtdHabitantes}</h4>
                    <h4>{info.universidades.map((universidades) => (
                        <div>{universidades}</div>
                    ))}</h4>
                </div> : <div>Carregando...</div>
            }
        </div >
    );
}

export default SimuleteApi;