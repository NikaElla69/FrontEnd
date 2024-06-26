import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div>
                <Link to="/profile">Ir para a página de perfil</Link>
            </div>
            <div>
                <Link to="/list">Ir para a página de lista</Link>
            </div>
            <div>
                <Link to="/search">Ir para a página de busca de pokemon</Link>
            </div>
            <div>
                <Link to="/post">Ir para a página de post</Link>
            </div>
            <div>
                <Link to="/postLibForm">Ir para a página de post Lib form</Link>
            </div>
        </div>
    );
}

export default Home;