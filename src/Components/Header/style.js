import styled, { keyframes } from 'styled-components';

export const HeaderSection = styled.div`
    height: 4250px;
    padding-top: 90px;
    background: url('images/background.jpg');
`

export const Container = styled.div`
    width: 92%;
    margin: auto
`

export const HeaderContent= styled.div`
    display : flex;
`

export const HeaderText = styled.div`
    display: flex;
    align-items: end;
    height: 530px;
    width: 32%;
    text-align: left;
`

export const TextContent = styled.div`
    
`

export const TextTittle = styled.h3`
    position: relative;
    color: #fff;
    font-size: 32px;
    text-transform: uppercase;
    font-family: 'Playfair Display SC',serif;
    margin-bottom: 30px;
    &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20%;
        height: 2px;
        background: orange;
    }
`

export const TitleSpan = styled.span`
    font-weight: 600;
`

export const TextDesc = styled.p`
    color: #dadadb;
    font-size: 15px;
`

export const TextButton = styled.button`
    background: #F3a446;
    border: none;
    color: #121212;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 30px;
    border-radius: 3px
`

export const HeaderImgBx = styled.div`
    width: 65%;
    overflow: hidden;
`

const animationName = keyframes`
0% { transform: rotate(0deg); }
50% { transform: rotate(40deg); }
100% { transform: rotate(0deg); }
`

export const HeaderImage = styled.img`
    width: 74%;
    float: right;
    animation: ${animationName} 30s infinite 0s ease;
`