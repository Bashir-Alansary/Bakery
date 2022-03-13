import styled from "styled-components";
export const DetailsSection = styled.div`
    position: relative;
    padding-top: 90px;
    height: 500px;
    background: #010101;
    display: flex;
    justify-content: center;
`

export const OutImg = styled.img`
    position: absolute;
    top: -70px;
    left: 200px;
    z-index: 0;
`

export const Container = styled.div`
    width: 92%;
`

export const DetailsContent = styled.div`
    position: relative;
    height: 315px;
    width: 100%;
    background: #bb6d35;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
`

export const DetailsBoxLt = styled.div`
    width: 30%;
`

export const DetailsBoxMd = styled.div`
    width: 25%;
    color: #000;
`

export const ImgBox = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;
`

export const Image = styled.img`
    margin-left: -75px;
    margin-top: -92px;
    width: 138%;
`

export const Title = styled.h3`
    margin-top: 30px;
    text-transform: uppercase;
    font-family: 'Playfair Display SC', serif;
    font-size: 35px;
`

export const MiddleDesc = styled.p`
    font-size: 15px;
    margin-bottom: 10px;
`

export const IconContent = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
`

export const IconBox = styled.div`
    width: 22%;
    height: 100%;
    text-align: center;
`

export const IconBetween = styled.div`
    width: 15%;
    height: 100%;
    line-height: 93px;
    text-align: center;
`

export const Icon = styled.div`
    font-size: 30px;
`

export const IconB = styled.div`
    font-size: 20px;
`

export const IconTitle = styled.h4`
    font-size: 14px;
`

export const DetailsBoxRt = styled.div`
    width: 25%;
    background: #a66635;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 30px;
`

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Bigpack = styled.div`
    width: 48%;
`

export const Order = styled.div`
    width: 48%;
`

export const BigImgBx = styled.div`
    margin-bottom: 20px;
`

export const BigImg = styled.img`
    width: 100px;
`

export const BigText = styled.div`
    
`

export const BigSpan = styled.span`
    color: #d8cab8;
`

export const BigTitle = styled.h4`
    font-family: 'Playfair Display SC', serif;
    color: #fff;
    font-size: 21px;
`

export const OrderDesc = styled.p`
    font-size: 13px;
    color: #fff;
`

export const OrderSpan = styled.span`
    color: #d8cab8;
`

export const OrderBtn= styled.a`
    text-decoration: none;
    display: inline-block;
    padding: 5px 15px;
    text-align: center;
    background: #f99e4c;
    border-radius: 3px;
    color: #000;
    font-size: 15px;
    font-weight: 600;
    margin-top: 20px;
    &:hover {
        color:#000;
    }
`

export const Bottom = styled.div`
    margin-top: 10px;
`

export const BottomDesc = styled.p`
    font-size: 12px;
    color: #d8cab8;
`
