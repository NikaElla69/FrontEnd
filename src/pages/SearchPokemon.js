import { Button, Flex, Input } from "@chakra-ui/react";
import Header from "../components/Header";

const SearchPokemon = () => {

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
                />
                <Button
                    size={"lg"}
                    bgColor={"teal.200"}
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