import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";


const GenreList = () => {
    const { data: genres, error, isLoading } = useData<Genre>("genres");

    return (
        <>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {genres.map((genre) => (
        <div key={genre.id}>{genre.name}</div>
        ))}
        </>
    )
}

export default GenreList;