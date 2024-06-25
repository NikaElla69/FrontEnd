import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {

    const [pokemons, setPokemons] = useState([])

    const getPokemons = useCallback(async () => {
        try {
            console.log(pokemons);
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
            setPokemons(response.data.results)
        } catch (error) {
            console.log(error);
        }
    }, [pokemons])

    useEffect(() => {
        getPokemons();
    }, [])

    if (!pokemons.length) {
        return <div>Carregando...</div>
    }
    return (
        <div>
            {pokemons.map((pokemon, index) => {
                return <div key={index}>{pokemon.name}</div>
            })}
        </div>
    );
}

export default List;