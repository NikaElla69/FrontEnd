import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>Nome: Camilla Gomes</p>
            <p>Idade: 18</p>
            <p>Email: camilla@gmail.com</p>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
}

export default Profile;