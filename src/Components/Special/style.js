import styled from "styled-components";

export const SpecialSection = styled.div`
    position: relative;
    background: #000;
    padding: 60px 0;
`

export const OutImg = styled.img`
    position: absolute;
    bottom: -180px;
    width: 300px;
    right: 0;
    z-index: 0;
    left: ${props => props.lt ? '0' : ''};
    bottom: ${props => props.lt ? '-140px' : ''};
    left: ${props => props.cn ? '500px' : ''};
    bottom: ${props => props.cn ? '-120px' : ''};
    width: ${props => props.cn ? 'unset' : ''};
    transform: ${props => props.cn ? 'rotate(28deg);' : 'none'};
`

export const Container = styled.div`
    width: 92%;
    margin: auto;
`

export const Title= styled.h2`
   text-align: center;
   color: #fff;
   margin-bottom: 60px;
   font-family: 'Playfair Display SC',serif;
`

export const SpecialContent= styled.div`
   

`

export const SpecialBx = styled.div`
    height: 350px;
`

export const ImgBx= styled.div`
    position: relative;
    height: 79%;
    overflow: hidden;
    &:hover {
       .over {
            background: rgba(0,0,0,.5);
            transform: scale(1.1);
            .icon-bx {
                opacity: 1;
            }
       }
       img {
            transform: scale(1.1);
       }
    }
`

export const BxOverlay= styled.div`
   position: absolute;
   top: 8px;
   left: 8px;
   right: 8px;
   bottom: 8px;
   border: 1px solid rgba(255, 255, 255, 0.5);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 2;
   transition: 0.5s;
`

export const IconContent = styled.div`
   width: 60px;
   height: 60px;
   text-align: center;
   line-height: 50px;
   border-radius: 50%;
   color: #fff;
   font-size: 24px;
   border: solid 2px rgba(255,255,255,.3);
   opacity: 0;
   cursor: pointer;
   transition: 0.5s;
   &:hover {
        border-color: rgba(255,255,255,0);
        background: rgba(255,255,255,.3);
   }
`

export const Img= styled.img`
    max-width: 100%;
    max-height: 100%;
    transition: 0.5s;
`

export const Text = styled.div`
     height: 30%;
     text-align: center;
`

export const TextTitle= styled. h3`
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 10px;
`

export const TextPrice = styled.span`
    color: orange;
    font-weight: bold;
    font-size: 17px;
`
