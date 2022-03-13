import styled from 'styled-components';

export const AboutSection = styled.div`
    padding-top: 78px;
`

export const Container = styled.div`
    width: 75%;
    margin: auto;
`
export const AboutHeader = styled.div`
    position: relative;
    height: 320px;
    background: url('images/about1.webp');
    background-size:cover;
`
export const HeaderOver = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgb(0 0 0 / 75%);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderContent = styled.div`
    text-align: center;
`
export const Title = styled.h2`
   position: relative;
   color: #fff;
   font-size: 40px;
   text-transform: uppercase;
   font-family: 'Playfair Display SC',serif;
   width: fit-content;
   span {
       color: #f3a446;
   }
   &:before {
       content: "";
       position: absolute;
       bottom: 0;
       left: 0;
       width: 100%;
       height: 3px;
       background: #f3a446;
    }
`

export const AboutContent = styled.div`
    position: relative;
    height: 645px;
    background: #000;
`
export const ContentOver = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url('images/nbg.png');
    background-size: contain;
    padding: 100px 0;
`

export const Content = styled.div`
    position: relative;
`
   

export const Text = styled.div`
    position: absolute;
    left: 0;
    top: 30px;
    width: 77%;
    background: rgb(41,41,41);
    height: 480px;
    padding: 60px 80px;
    text-align: center;
    &:before {
        content: "";
        position: absolute;
        inset: 20px;
        border: 1px dashed rgba(255, 255, 255, 0.2);
        z-index: 2;
        box-shadow: rgb(255 255 255 / 3%) 0px 0px 0px 20px;
    }
`
export const TitleOne = styled.h3`
    color: #f3a446;
    font-family: 'Great Vibes', cursive;
    font-size: 45px;
    position: relative;
    z-index: 2;
`

export const TitleTwo = styled.h2`
    position: relative;
    z-index: 2;
    color: #fff;
    font-size: 38px;
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 25px;
    padding: 20px 0;
    &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px dashed #f3a446;
     }
`

export const Desc = styled.p`
    color: #d4d4d7;
    position: relative;
    z-index: 2;
`

export const Btn = styled.a`
    display: inline-block;
    text-decoration: none;
    color: #f3a446;
    padding: 8px 0;
    position: relative;
    z-index: 2;
    border-bottom: 1px dashed #f3a446;
    &:hover{
        color: #fff;
    }
`

export const ImgBx = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    width: 50%;
    text-align: right;
`

export const Img = styled.img`
    
`

export const Companies = styled.div`
    background: #000;
`
export const CmpContainer = styled.div`
    width: 92%;
    margin: 0 auto;
`
export const CmpContent = styled.div`
    padding: 85px 0 200px;
    display: flex;
    justify-content: space-between;
`
export const CmpBx = styled.div`
    position: relative;
    width: 15%;
`
export const CmpLink = styled.a`
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%
`
export const CmpImg = styled.img`
    width: 100%;
`

