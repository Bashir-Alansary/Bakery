import styled from 'styled-components';

export const ShopSection = styled.div`
    padding-top: 78px;
`

export const Container = styled.div`
    width: 75%;
    margin: auto;
`
export const ShopHeader = styled.div`
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

export const ShopContent = styled.div`
    position: relative;
    height: 1300px;
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