import styled  from "styled-components";

export const ProductsSection = styled.div`
    margin-top: 80px;
`

export const ProductsTittle = styled.h2`
    color: #f3a446;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
    font-family: 'Playfair Display SC',serif;
`

export const ProductsContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    height : 750px;

    @media (max-width: 768px) {
        justify-content: center;
        height : 3150px;
        align-content: space-between;
      }
`

export const ProductsBox = styled.div`
    position: relative;
    width: 24%;
    height: 365px;
    border-radius: 4px;
    background: #202020;
    padding: 20px;
    box-shadow: 0 1px 20px #000;
    transition: 0.5s;
    &:hover {
        background: url('images/pro-bg.jpg');
        .info {
            opacity: 1;
            transform: translateY(0%);

        }
    }
    &:nth-child(1),
    &:nth-child(3)  {
        &:before {
            content: 'New';
            position: absolute;
            top: -25px;
            left: 20%;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #fff;
            border-radius: 50%;
            border: 1px solid #fff;
        }
    }

    @media (max-width: 768px) {
        width: 70%;
      }
`

export const BoxInfo = styled.p`
    position: absolute;
    top: 30%;
    left: 20px;
    right: 20px;
    background: rgb(165 125 97 / 81%);
    backdrop-filter: blur(10px);
    height: 100px;
    border-radius: 5px;
    padding: 10px;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(-25%);
    &:before {
        content: "";
        position: absolute;
        bottom: -14px;
        right: 30px;
        width: 14px;
        height: 14px;
        border-top: 7px solid rgb(165 125 97 / 81%);
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid transparent;
        backdrop-filter: blur(10px);
    }

`

export const Info = styled.p`
    color: #fff;
    font-size: 15px;
`

export const InfoSpan = styled.span`
    color: #fff;
    font-weight: bold;
`

export const ImgBox = styled.div`
    height: 59%;
    text-align: center;
`

export const Image = styled.img`
    width: 66%;
    margin: 20px;
`

export const TextBox = styled.div`
    height: 41%;
    padding: 0 20px;
`

export const Top = styled.div`
    color: #d4d4d7;
    text-align: right;
    font-size: 28px;
    margin-bottom: 10px;
`

export const Center = styled.div`
    color: #d4d4d7;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const CenterPrice = styled.p`
    
`

export const CenterWeight = styled.p`
    text-align: right;
`

export const Bottom = styled.div`
    color: #fff;
    display: flex;
    justify-content: space-between;
`

export const BottomTittle = styled.h4`
    color: #fff;
    font-family: 'Playfair Display SC',serif;
`

export const BottomAdd = styled.a`
    display: inline-block;
    color: #000;
    background: #f3a446;
    text-decoration: none;
    padding: 5px 0;
    width: 60px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        color: #000;
    }
`

export const ViewAll = styled.div`
    text-align: center;
    margin: 40px;
`

export const ViewAllBtn = styled.a`
    display: inline-block;
    color: #000;
    background: #f3a446;
    text-decoration: none;
    padding: 9px 50px;
    font-weight: bold;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        color: #000;
    }
`
