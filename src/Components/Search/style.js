import styled from 'styled-components';

export const SearchSection = styled.div `
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SearchInput = styled.input `
    height: 60px;
    width: 65%;
    border: none;
    border-bottom: 1px solid orange;
    padding: 0 30px;
    font-size: 28px;
    background: #fff;
    color: orange;
    &:focus {
        outline: none;
    }

`
export const SearchIcon = styled.div`  
    position: absolute;
    top: 40px;
    right: 50px;  
    padding: 8px;
    font-size: 29px;
    margin-left: 15px;
    cursor: pointer;
    color: #fff;
`
