import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Input, useToast, Image, Badge, Text, Box, InputGroup, InputRightElement } from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

const PokemonInfo = ({ pokemon }) => {
    if (!pokemon) return <div></div>

    return (
        <Card marginTop={8} maxW={"400px"} >
            <CardHeader>
                <Heading size={"lg"}>{pokemon.name}</Heading>
            </CardHeader>
            <CardBody >
                <Image src={pokemon.sprites.other.home.front_default} width={"250px"} />
                <Flex direction={"column"} gap={4} alignItems={"flex-start"}>
                    <Text fontSize={"lg"}>Habilidades: </Text>
                    {pokemon.abilities.map((ability) => (
                        <Badge>{ability.ability.name}</Badge>
                    ))}
                </Flex>

            </CardBody>
            <CardFooter>
                <Flex direction={"row"} gap={4} alignItems={"flex-start"} justifyContent={"center"}>
                    <Text fontSize={"lg"}>Tipos: </Text>
                    <Box>
                        {pokemon.types.map((type) => (
                            <Badge>{type.type.name}</Badge>
                        ))}
                    </Box>
                </Flex>
            </CardFooter>
        </Card>
    )
}

const SearchPokemon = () => {

    const toast = useToast();
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
            toast({
                title: "Error",
                description: "Pokémon não encontrado",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
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
                <InputGroup size={"lg"}>
                    <Input
                        placeholder="Digite o nome do Pokémon"
                        size={"lg"}
                        colorScheme="teal"
                        onChange={onChangeInput}
                    />
                    <InputRightElement w={"70px"} marginRight={"4px"}>
                        <Button bgColor={"#D6BCFA"} onClick={() => {
                            setInput("");
                            setPokemon(undefined);
                        }}
                        >
                            Limpar
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Button
                    size={"lg"}
                    bgColor={"teal.200"}
                    onClick={getPokemon}
                    isLoading={loading}
                >
                    Buscar
                </Button>
            </Flex>
        )
    }

    return (
        <Box>
            <Header title={"Search Pokémon"} />
            {renderSearchImput()}
            <Flex justifyContent={"center"}>
                <PokemonInfo pokemon={pokemon} />
            </Flex>
        </Box>
    );
}

export default SearchPokemon;