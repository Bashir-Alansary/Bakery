import {SpecialSection, OutImg, Container, Title, SpecialContent, SpecialBx, ImgBx, BxOverlay, IconContent, Img, Text, TextPrice, TextTitle} from './style';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
import {BsCardImage} from "react-icons/bs";
import Viewpic from '../ViewPic';
class Special extends Component {
    state = {
        items: [],
        showPic: false
    }

    componentDidMount() {
        axios.get('js/data.json').then(res => {this.setState({items: res.data.special})})
    }

    handleShow = () => {
        this.setState({showPic: !this.state.showPic});
    }

    render() {
        const {items} = this.state;
        const itemsList = items.map(item => {
            return(
                <SpecialBx >
                    <ImgBx>
                        <BxOverlay className='over'>
                            <IconContent className='icon-bx' onClick={()=>{this.handleShow()}}>
                                <BsCardImage />
                            </IconContent>
                        </BxOverlay>
                        <Img src={item.image} />
                    </ImgBx>
                    <Text>
                        <TextTitle>{item.title}</TextTitle>
                        <TextPrice>{item.price}</TextPrice>
                    </Text>
                </SpecialBx>
            )
        })
        return(
            <SpecialSection>
                <OutImg src="images/spout1.png" />
                <OutImg src="images/leaf2.png" cn />
                <OutImg src="images/spout2.png" lt />
                <Viewpic showPic={this.state.showPic} handleShow={this.handleShow} />
                <Container>
                    <Title>Today's Specail</Title>
                    <SpecialContent>
                        <OwlCarousel className='owl-theme' loop margin={45} items={4} autoplay={true} smartSpeed={500} autoplayTimeout={2500} nav>
                            <SpecialBx >
                                <ImgBx>
                                    <BxOverlay className='over'>
                                        <IconContent className='icon-bx' onClick={()=>{this.handleShow()}}>
                                            <BsCardImage />
                                        </IconContent>
                                    </BxOverlay>
                                    <Img src="images/s1.jpg" />
                                </ImgBx>
                                <Text>
                                    <TextTitle>milk bread</TextTitle>
                                    <TextPrice>550$</TextPrice>
                                </Text>
                            </SpecialBx>
                            <SpecialBx >
                                <ImgBx>
                                    <BxOverlay className='over'>
                                        <IconContent className='icon-bx' onClick={()=>{this.handleShow()}}>
                                            <BsCardImage />
                                        </IconContent>
                                    </BxOverlay>
                                    <Img src="images/s2.jpg" />
                                </ImgBx>
                                <Text>
                                    <TextTitle>milk bread</TextTitle>
                                    <TextPrice>550$</TextPrice>
                                </Text>
                            </SpecialBx>
                            <SpecialBx >
                                <ImgBx>
                                    <BxOverlay className='over'>
                                        <IconContent className='icon-bx' onClick={()=>{this.handleShow()}}>
                                            <BsCardImage />
                                        </IconContent>
                                    </BxOverlay>
                                    <Img src="images/s3.jpg" />
                                </ImgBx>
                                <Text>
                                    <TextTitle>milk bread</TextTitle>
                                    <TextPrice>550$</TextPrice>
                                </Text>
                            </SpecialBx>
                            <SpecialBx >
                                <ImgBx>
                                    <BxOverlay className='over'>
                                        <IconContent className='icon-bx' onClick={()=>{this.handleShow()}}>
                                            <BsCardImage />
                                        </IconContent>
                                    </BxOverlay>
                                    <Img src="images/s4.jpg" />
                                </ImgBx>
                                <Text>
                                    <TextTitle>milk bread</TextTitle>
                                    <TextPrice>550$</TextPrice>
                                </Text>
                            </SpecialBx>
                            <SpecialBx >
                                <ImgBx>
                                    <BxOverlay className='over'>
                                        <IconContent className='icon-bx' onClick={()=>{this.handleShow()}}>
                                            <BsCardImage />
                                        </IconContent>
                                    </BxOverlay>
                                    <Img src="images/s5.jpg" />
                                </ImgBx>
                                <Text>
                                    <TextTitle>milk bread</TextTitle>
                                    <TextPrice>550$</TextPrice>
                                </Text>
                            </SpecialBx>
                            <SpecialBx >
                                <ImgBx>
                                    <BxOverlay className='over'>
                                        <IconContent className='icon-bx' onClick={()=>{this.handleShow()}}>
                                            <BsCardImage />
                                        </IconContent>
                                    </BxOverlay>
                                    <Img src="images/s6.jpg" />
                                </ImgBx>
                                <Text>
                                    <TextTitle>milk bread</TextTitle>
                                    <TextPrice>550$</TextPrice>
                                </Text>
                            </SpecialBx>
                            <SpecialBx >
                                <ImgBx>
                                    <BxOverlay className='over'>
                                        <IconContent className='icon-bx' onClick={()=>{this.handleShow()}}>
                                            <BsCardImage />
                                        </IconContent>
                                    </BxOverlay>
                                    <Img src="images/s7.jpg" />
                                </ImgBx>
                                <Text>
                                    <TextTitle>milk bread</TextTitle>
                                    <TextPrice>550$</TextPrice>
                                </Text>
                            </SpecialBx>
                            <SpecialBx >
                                <ImgBx>
                                    <BxOverlay className='over'>
                                        <IconContent className='icon-bx' onClick={()=>{this.handleShow()}}>
                                            <BsCardImage />
                                        </IconContent>
                                    </BxOverlay>
                                    <Img src="images/s8.jpg" />
                                </ImgBx>
                                <Text>
                                    <TextTitle>milk bread</TextTitle>
                                    <TextPrice>550$</TextPrice>
                                </Text>
                            </SpecialBx>
                        </OwlCarousel>;
                    </SpecialContent>
                </Container>
            </SpecialSection>
        )
    }
    
}

export default Special;