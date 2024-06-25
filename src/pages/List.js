import { useNavigate } from "react-router-dom";

const List = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h3>Músicas:</h3>
            <p>Zarastruta</p>
            <p>Yago opróprio</p>
            <p>Seu Jorge</p>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
}

export default List;