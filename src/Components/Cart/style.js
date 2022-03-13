import styled from 'styled-components';

export const CartSection = styled.div`
    padding-top: 78px;
`

export const Container = styled.div`
    width: 75%;
    margin: auto;
`
export const CartHeader = styled.div`
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

export const CartContent = styled.div`
    position: relative;
    height: 1280px;
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
export const Table = styled.table`
    
`
export const THead = styled.thead`
    border-bottom: 2px solid rgb(255 255 255 / 8%);
`
export const TH = styled.th`
    text-align: center;
    color: #fff;
    &:nth-child(odd){background:#292929;};
    &:nth-child(even){background:#212121;};
`
export const FirstTR = styled.tr`
    
`

export const TR = styled.tr`
    height: 80px;

`
export const TBody = styled.tbody`
    
`
export const TD = styled.td`
    line-height: 80px;
    text-align: center;
    color: #fff;
    border-bottom: none;
    border-top: 1px solid rgb(255 255 255 / 8%);
    &:first-child{width: 100px;};
    &:last-child{width: 100px;};
    &:nth-child(odd){background:#292929;};
    &:nth-child(even){background:#212121;};
    .remove {
        cursor: pointer;
        width: fit-content;
        margin: 0 auto;
        line-height: normal;
        padding: 2px 5px 5px;
        display: inline-block;
    }
`
export const Img = styled.img`
    width: 80px;
    padding: 5px;
    border: 1px solid #4c4b4b;
`
export const ItemName = styled.span`
    display: inline-block;
    margin-left: 20px;
    color: #fff;
`

export const Num = styled.input`
    width: 70px;
    height: 20px;
    line-height: 40px;
    text-align: center;
    padding: 15px 0;
    border: none;
    font-size: 18px;
    background: transparent;
    color: orange;
    &:focus {
        outline: none;
    }
`
export const BtnContent = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Code = styled.div`
    
`
export const CodeInput = styled.input`
    background: rgba(255,255,255,0.1);
    border: none;
    color: #fff;
    font-size: 14px;
    height: 40px;
    font-weight: 500;
    line-height: 40px;
    padding: 0 15px;
    margin-right: 15px;
    &:focus {outline: none}
`
export const Btn = styled.button`
    border: none;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 500;
    padding: 0 20px;
    background: #F3a446;
    cursor: pointer;
`
export const Update = styled.div`
    
`
export const CartTotal = styled.div`
    
`
export const TotalContent = styled.div`
    display: flex;
    justify-content: center;
    height: 440px;
    margin: 100px 0;
`
export const Text = styled.div`
    position: relative;
    top: 50px;
    left: 105px;
    padding: 75px 60px;
    background: rgb(41, 41, 41);
    width: 40%;
    color: #fff;
    &:before {
        content: "";
        position: absolute;
        inset: 20px;
        border: 1px dashed rgba(255, 255, 255, 0.2);
        z-index: 2;
        box-shadow: rgb(255 255 255 / 3%) 0px 0px 0px 20px;
    }
`
export const TotalTitle = styled.h3`
    color: #F3a446;
    text-transform: uppercase;
    font-family: 'Playfair Display SC',serif;
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
`
export const TextBx = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 25px;
    padding-bottom: 5px;
    position: relative;
    z-index: 2;
`
export const BxTitle = styled.h4`
    font-size: 16px;
    margin-bottom: 0;
`
export const BxPrice = styled.p`
    margin-bottom: 0;
    color: #F3a446;
    font-weight: 500;
`

export const ImgBx = styled.div`
    position: relative;
    width: 53%;
    z-index: 1;
`
export const TotalImg = styled.img`
    
`
export const PreceedBtn = styled(Btn)`
    width: 100%;
    margin-top: 20px;
    position: relative;
    z-index: 2;
` 
   
   