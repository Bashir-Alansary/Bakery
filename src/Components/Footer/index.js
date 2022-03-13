import {FooterSection, Container, FooterContent, FooterTop, FooterBx, BxTitle, BxDesc, Logo, LogoImg,
     DescIcon, Icon, IconTitle, DescContact, InContact, Location, FooterBottom, ImgBx, ImgLink, Img  } from "./style";
import { FaFacebookF, FaInstagram} from "react-icons/fa";
import { Component } from "react";
import axios from "axios";
class Footer extends Component {

    state = {
        orders :[]
    }

    componentDidMount() {
        axios.get('js/data.json').then(res => {this.setState({orders: res.data.order})});
    }

    render(){
        const {orders} = this.state;
        const ordersList = orders.map(orderItem => {
            return(
                <ImgBx key={orderItem.id}>
                    <ImgLink href="#">
                        <Img src={orderItem.image} />
                    </ImgLink>
                </ImgBx>
            )
        })
        return(
            <FooterSection>
                <Container>
                    <FooterContent>
                        <FooterTop>
                            <FooterBx>
                                <BxTitle>Follow</BxTitle>
                                <BxDesc>
                                    <DescIcon>
                                        <Icon><FaFacebookF /></Icon>
                                        <IconTitle>Facebook</IconTitle>
                                    </DescIcon>
                                    <DescIcon>
                                        <Icon><FaInstagram /></Icon>
                                        <IconTitle>Instagram</IconTitle>
                                    </DescIcon>
                                </BxDesc>
                            </FooterBx>
                            <FooterBx>
                                <BxTitle>Contact</BxTitle>
                                <BxDesc>
                                    <DescContact>
                                        <InContact>+1 010 250 360 012</InContact>
                                        <InContact>littleRed306@gmail.com</InContact>
                                    </DescContact>
                                </BxDesc>
                            </FooterBx>
                            <FooterBx ctr>
                                <Logo>
                                    <LogoImg src="images/logo-re.png"/>
                                </Logo>
                            </FooterBx>
                            <FooterBx>
                                <BxTitle>Bakery</BxTitle>
                                <BxDesc>360 30th St NE<br/> Nasr City Cairo</BxDesc>
                            </FooterBx>
                            <FooterBx>
                                <BxTitle>Find Us</BxTitle>
                                <BxDesc>
                                    <Location href="#">
                                        open our location<br></br> on google map
                                    </Location>
                                </BxDesc>
                            </FooterBx>
                        </FooterTop>
                        <FooterBottom>
                            {ordersList}
                        </FooterBottom>
                    </FooterContent>
                </Container>
            </FooterSection>
        )
    }
    
}

export default Footer;