import styled from "styled-components"

export const OptionSection= styled.div`
    
`

export const OptionContent = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Location = styled.div`
    width: 10%;
    color: #CFCFD0;
    display: flex;
    justify-content: space-between;
`

export const IconContent = styled.div`
    font-size: 30px;
    text-align: center;
    line-height: 30px;
    transition: ${props => props.vid? "0.3s" : "0"};
`

export const LocationText = styled.div`
    width: 70%;
    font-size: 16px;
`

export const LocationDesc = styled.p`
  line-height: 1.3;
`

export const Video = styled(Location)`
    cursor: pointer;
    &:hover {
        color: #fff;
        a {
            color: #fff;
        }
    }
`


export const VideoText = styled(LocationText)`
      
`

export const VideoLink = styled.a`
    color: #CFCFD0;
    display: inline-block;
    font-size: 16px;
    line-height: 1.3;
    transition: 0.3s;
` 