import { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";


const GameGrid = () => {
    const { games, error } = useGames();

    return <div> 
        { error && <Text>{error}</Text>}
        <SimpleGrid 
            columns={{sm:1, md: 2, lg: 3, xl: 4}} 
            spacing={10} 
            padding={10}>
            {games.map((game) => (
                <GameCard key={game.id} game={game}/>
            )
            )}
        </SimpleGrid>
    </div>
};

export default GameGrid;