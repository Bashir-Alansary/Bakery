import styled from "styled-components";

export const FooterSection = styled.div`
    position: relative;
    height: 400px;
    background: #000;
`

export const Container = styled.div`
    width: 92%;
    margin: auto;
`
export const FooterContent = styled.div`
    
`

export const FooterTop = styled.div`
    display: grid;
    grid-template-columns: 16% 16% 32% 16% 16%;
    grid-column-gap: .9%;
    margin-bottom: 80px;
`
export const FooterBx = styled.div`
    text-align: center;
`
export const BxTitle = styled.h3`
    color: #fff;
    margin-bottom: 20px;
    font-family: 'Playfair Display SC',serif;
`
export const BxDesc = styled.div`
    color: #fff;
    font-size: 13px;
`
export const Logo = styled.div`
    
`
export const LogoImg = styled.img`
    
`
export const DescIcon = styled.div`
    display: flex;
    justify-content: center;
`
export const Icon = styled.div`
    width: 25%;
`
export const IconTitle = styled.p`
    color: #fff;
    width: 35%;
    margin-bottom:0;
`
export const DescContact = styled.div`
    
`
export const InContact = styled.p`
     margin-bottom:0;
`
export const Location = styled.a`
    color: #fff;
    text-decoration: none;
    &:hover {
        color: #fff;
    }
`
export const FooterBottom = styled.div`
    display: grid;
    grid-template-columns: repeat(10, auto);
    grid-column-gap: 1.3%;
`
export const ImgBx = styled.div`
    border-radius: 3px;
    overflow: hidden;
`
export const ImgLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
`
export const Img = styled.img`
    width: 100%;
`