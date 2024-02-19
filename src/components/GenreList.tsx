import { HStack, ListItem, Image, Text, List } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-crop";


const GenreList = () => {
    const { data: genres, error, isLoading } = useData<Genre>("genres");

    return (
        <>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {genres.map((genre) => (
            <List>
                <ListItem key={genre.id}>
                    <HStack>
                        <Image 
                        src={getCroppedImageUrl(genre.image_background)}
                        alt={genre.name}
                        borderRadius={8}
                        boxSize="50px"
                        ></Image>
                        <Text>{genre.name}</Text>
                    </HStack>
                </ListItem>
            </List>
       // <div key={genre.id}>{genre.name}</div>
        ))}
        </>
    )
}

export default GenreList;