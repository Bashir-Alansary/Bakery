import {OvenSection, OutImg, Container, OvenContent, OvenText, TextContent, TextTitle,
     FirstP, SecondP, ThirdP, TextIcon, Icon, TextYears, YearNum, YearTitle, OvenImgBx, OvenImg, ImgBxBack, ImgBack, OvenBtn} from "./style.js";

const Oven = () => {
    return(
        <OvenSection>
            <OutImg src= "images/before3.png" />
            <Container>
                <OvenContent>
                    <OvenText>
                        <TextContent>
                            <TextTitle>Bread beyond just taste</TextTitle>
                            <FirstP>
                                Sample a selection of our best selling breads and treats that
                                will be delivered right to your doorstep is whole
                                will be delivered right to your doorstep is whole to your doorstep is whole
                            </FirstP>
                            <SecondP>
                                Sample a selection of our best selling breads and treats that
                                will be delivered right to your 
                            </SecondP>
                            <ThirdP>
                                Sample a selection of our best selling breads and treats that
                                will be delivered right
                            </ThirdP>
                            <TextIcon>
                                <Icon className="fa fa-facebook"></Icon>
                                <Icon className="fa fa-instagram" last></Icon>
                            </TextIcon>
                        </TextContent>
                        <TextYears>
                            <YearNum>15</YearNum>
                            <YearTitle>years</YearTitle>
                        </TextYears>
                    </OvenText>
                    <OvenImgBx>
                        <OvenImg src="images/oven.png" />
                    </OvenImgBx>
                </OvenContent>
                <OvenBtn href="#">Try something fresh from our oven</OvenBtn>
            </Container>
        </OvenSection>
    )
}

export default Oven;