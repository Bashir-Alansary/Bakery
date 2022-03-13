import{DetailsSection, Container, DetailsContent, OutImg, DetailsBoxLt, DetailsBoxMd, DetailsBoxRt, ImgBox, Image, Title,
     MiddleDesc, IconContent, IconBox, IconBetween, Icon, IconB, IconTitle, Top, Bigpack, BigImgBx, BigImg,
      BigText, BigSpan, BigTitle, Order, OrderDesc, OrderSpan, OrderBtn, Bottom ,BottomDesc } from "./style.js";
import { BsTruck, BsChevronRight } from "react-icons/bs";
import { IoFastFoodOutline, IoGiftOutline } from "react-icons/io5";

 const Details = () => {
    return(
        <DetailsSection>
            <OutImg src= "images/before3.png" />
            <Container>
                <DetailsContent>
                    <DetailsBoxLt>
                        <ImgBox>
                            <Image src="images/details.png"/>
                        </ImgBox>
                    </DetailsBoxLt>
                    <DetailsBoxMd>
                        <Title>Can`t decide?</Title>
                        <MiddleDesc>
                            Sample a selection of our best selling breads and treats that
                            will be delivered right to your doorstep is whole grain spelt, 
                            four seed, whole wheat, bagels and pastry (our most popular items)
                        </MiddleDesc>
                        <IconContent>
                            <IconBox>
                                <Icon><IoGiftOutline /></Icon>
                                <IconTitle>choose bunde</IconTitle>
                            </IconBox>
                            <IconBetween>
                                <IconB><BsChevronRight /></IconB>
                            </IconBetween>
                            <IconBox>
                                <Icon><BsTruck /></Icon>
                                <IconTitle>choose bunde</IconTitle>
                            </IconBox>
                            <IconBetween>
                                <IconB><BsChevronRight /></IconB>
                            </IconBetween>
                            <IconBox>
                                <Icon><IoFastFoodOutline /></Icon>
                                <IconTitle>choose bunde</IconTitle>
                            </IconBox>

                        </IconContent>
                    </DetailsBoxMd>
                    <DetailsBoxRt>
                        <Top>
                            <Bigpack>
                                <BigImgBx>
                                    <BigImg src="images/product4.png" />
                                </BigImgBx>
                                <BigText>
                                    <BigSpan>85$</BigSpan>
                                    <BigTitle>Big Pack*</BigTitle>
                                </BigText>
                            </Bigpack>
                            <Order>
                                <OrderDesc>
                                    Sample a selection of our best selle breads and trees thatcan
                                </OrderDesc>
                                <OrderSpan>850g</OrderSpan>
                                <OrderBtn href="#">order now</OrderBtn>
                            </Order>
                        </Top>
                        <Bottom>
                            <BottomDesc>
                                Sample a selection of our best selling breads and treats that
                                will be delivered right to your doorstep is whole
                            </BottomDesc>
                        </Bottom>
                    </DetailsBoxRt>
                </DetailsContent>
            </Container>
        </DetailsSection>
    )
}

export default Details;