import {OptionSection, OptionContent, Container, Location, IconContent, LocationText, LocationDesc,
    Video, VideoText, VideoLink} from './style.js';
import {AiOutlinePlayCircle} from "react-icons/ai";
import {HiOutlineLocationMarker} from "react-icons/hi";
const Options = () => {
    return(
        <OptionSection>
            <OptionContent>
                <Location>
                    <IconContent><HiOutlineLocationMarker /></IconContent> 
                    <LocationText>
                        <LocationDesc>
                            Nasr City, Cairo, Egypt
                        </LocationDesc>
                    </LocationText>   
                </Location>
                <Video>
                    <VideoText>
                        <VideoLink href="#">See how we make it</VideoLink>
                    </VideoText>
                    <IconContent vid><AiOutlinePlayCircle /></IconContent>  
                </Video>
            </OptionContent>
        </OptionSection>
    )
}

export default Options;