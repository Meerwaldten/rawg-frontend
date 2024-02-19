import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-crop";

interface Props {
    game: Game;
}

const GameCard = ( {game}:  Props) => {
    return (
    <Card>
        <Image src={ getCroppedImageUrl(game.background_image)} overflow={"hidden"} borderRadius={"5"}></Image>
        <CardBody>
            <HStack justifyContent="space-between">
                <PlatformIcons platforms={game.parent_platforms.map((p) => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize="2x1">{game.name}</Heading>
        </CardBody>
    </Card>
    )
}

export default GameCard;