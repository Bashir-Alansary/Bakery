import styled  from "styled-components";

export const TeamSection = styled.div`
    background: #000;
    padding: 70px 0;
`

export const Container = styled.div`
    width: 92%;
    margin: auto;
`

export const TeamTitle = styled.h2`
    color: #fff;
    text-align: center;
    font-family: 'Playfair Display SC',serif;
    margin-bottom: 40px;
`

export const TeamContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
`

export const TeamBx = styled.div`
   height: 410px;
   width: 24%;
   background: #202020;
   padding: 15px;
   transition: 0.5s;
   border-radius: 5px;
   &:hover {
       background:linear-gradient(45deg, #8b552c, rgb(139 85 44 / 30%));
       box-shadow: 0 1px 10px rgb(204 163 84 / 50%);
       transform: translateY(-5px);
   }
`

export const ImgBx = styled.div`
    height: 75%;
`

export const Image = styled.img`
    width: 100%;
`

export const Text = styled.div`
    padding: 15px;
`

export const Name = styled.h3`
    color: #fff;
    font-size: 22px;
`


export const Job = styled.p`
   color: orange;
`
