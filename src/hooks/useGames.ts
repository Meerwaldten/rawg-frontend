import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface GameResponse {
    count: number;
    results: Game[];
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const controller = new AbortController();

    useEffect(()=> {
        setIsLoading(true);
        apiClient
        .get<GameResponse>("games", { signal: controller.signal })
        .then((res) => setGames(res.data.results))
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
        //return () => controller.abort();
    }, []);

    return { games, error, isLoading };
}

export default useGames;