import styled from "styled-components";

export const OvenSection = styled.div`
    position: relative;
    height: 700px;
    background: #000;
    overflow-x: hidden;
`

export const OutImg = styled.img`
    position: absolute;
    top: -12px;
    right: -71px;
    z-index: 0;
`

export const Container = styled.div`
    width: 96%;
    float: right;
    overflow: hidden;
`

export const OvenContent = styled.div`
    display: flex;
`

export const OvenText = styled.div`
    width: 60%;
    margin-right: -120px;
    position: relative;
    background: rgb(68 65 63 / 45%);
    margin-top: 90px;
    height: 380px;
    z-index: 1;
    display: flex;
`

export const TextContent = styled.div`
    width: 50%;
    padding: 30px;
`

export const TextTitle = styled.h2`
    color: #fff;
    font-family: 'Playfair Display SC', serif;
    text-transform: uppercase;
`

export const FirstP = styled.p`
    color: #fff;
    font-size: 14px;
`

export const SecondP = styled(FirstP)`
    
`

export const ThirdP = styled.p`
    color: #a26233;
    font-size: 13px;
`

export const TextIcon = styled.div`

`

export const Icon = styled.i`
    color: #a26233;
    font-size: 14px;
    margin-left: ${props => props.last ? '25px' : '0'};
`

export const TextYears = styled.div`
    width: 50%;
    text-align: center;
    color: #F29A4B;
`

export const YearNum = styled.h1`
    font-size: 300px;
    font-family: 'Playfair Display SC', serif;
    margin: 20px 0 0 ;
    line-height: 0.8;
`

export const YearTitle = styled.h1`
    font-size: 100px;
    font-family: 'Playfair Display SC', serif;
    margin: -20px 0 0;
`

export const OvenImgBx = styled.div`
    width: 55%;
    position: relative;
    z-index: 2;
`

export const OvenImg = styled.img`
    position: relative;
    z-index: 2;
`

export const OvenBtn = styled.a`
    display: block;
    width: 96%;
    text-align: center;
    text-decoration: none;
    padding: 15px;
    background: #F29A4B;
    color: #000;
    border-radius: 5px;
    font-size: 24px;
    font-family: 'Playfair Display SC', serif;
    font-weight: bold;
    margin-top: 50px;
    &:hover {
        color: #000;
    }
`