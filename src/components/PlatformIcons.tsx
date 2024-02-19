import { Icon, HStack } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
    platforms: Platform[]
}


const PlatformIcons = ({platforms}: Props) => {
    //const iconMap: { [key: string]: IconType } 

    const getIcon = (slug: string) => {
        switch(slug) {
            case "pc":
                return FaWindows;
            case "playstation":
                return FaPlaystation;
            case "xbox": 
                return FaXbox;
            case "linux":
                return FaLinux;
            case "mac":
                return FaApple;
            case "nintendo":
                return SiNintendo;
            case "android":
                return FaAndroid;
            case "ios":
                return MdPhoneIphone;
            default: 
                return BsGlobe;
        }
    }


    return (
        <HStack>
         {platforms.map((platform) => (
                <Icon key={platform.id} as={getIcon(platform.slug)}></Icon>
            ))}
        </HStack>
    )  
};

export default PlatformIcons;