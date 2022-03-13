import Options from '../Options';
import Products from '../products';
import {HeaderSection, Container, HeaderContent, HeaderText, TextContent, TextTittle, TitleSpan,
     TextDesc, TextButton, HeaderImage, HeaderImgBx} from './style';
const Header = () => {
    return(
        <HeaderSection>
            <Container>
               <HeaderContent>
                    <HeaderText>
                        <TextContent>
                            <TextTittle>Traditional <br/> <TitleSpan>Artisan Bakery</TitleSpan></TextTittle>
                            <TextDesc>
                                little red hen is the best restrant in the world to go to using you should have our map and phone
                                little red hen is the best restrant restrant in the world hen is the besttt restrant in the world to go to us you should have our map and phone
                                little red hen that is it
                            </TextDesc>
                            <TextButton>Shop Now</TextButton>
                        </TextContent>
                    </HeaderText>
                    <HeaderImgBx>
                        <HeaderImage src = 'images/dish5.png'/>
                    </HeaderImgBx>
               </HeaderContent>
               <Options />
               <Products />
            </Container>
        </HeaderSection>
    )
}

export default Header;