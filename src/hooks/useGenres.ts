import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface GenreResponse {
    count: number;
    results: Genre[];
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
}


const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const controller = new AbortController();

    useEffect(() => {
        setIsLoading(true);
        apiClient
        .get<GenreResponse>("genres", { signal: controller.signal })
        .then((res) => setGenres(res.data.results))
        .catch((error) => {
            if ( error instanceof CanceledError) return;
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
    }, []);


    return { genres, error, isLoading };

}

export default useGenres;