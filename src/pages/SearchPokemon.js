import { Button, Flex, Input } from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

const SearchPokemon = () => {

    const [input, setInput] = useState();
    const [loading, setLoading] = useState();
    const [pokemon, setPokemon] = useState();

    const onChangeInput = (event) => {
        setInput(event.target.value);
    }

    const getPokemon = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
            setPokemon(response.data)
        } catch (error) {
        } finally {
            setLoading(false)
        }
    }

    const renderSearchImput = () => {
        return (
            <Flex
                gap={8}
                px={16}
                justifyContent={"center"}
                alignItems={"center"}
                marginTop={8}
            >
                <Input
                    placeholder="Digite o nome do Pokémon"
                    size={"lg"}
                    colorScheme="teal"
                    onChange={onChangeInput}
                />
                <Button
                    size={"lg"}
                    bgColor={"teal.200"}
                    onClick={onChangeInput}
                >
                    Buscar
                </Button>
            </Flex>
        )
    }

    return (
        <div>
            <Header title={"Search Pokémon"} />
            {renderSearchImput()}
        </div>
    );
}

export default SearchPokemon;