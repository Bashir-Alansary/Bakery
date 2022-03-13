import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    height: 0;
    transition: 0.5s;
    background: #8b552c;
`

export const NavContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 92%;
`

export const Logo = styled.div`
   width: 25%;
   position: relative
`
export const LogoImg = styled.img`
    position: absolute;
    padding-top: 15px;
    cursor: pointer;
    transition: 1s;
    z-index: ${props => props.re? '1' : '0'};
    
`


export const Navcollapse = styled.div`
    flex-grow: 0;
    width: 60%;
    align-items: start;

`

export const NavItemList = styled.ul`
   width: 100%;
`
export const NavItem = styled.li`
    text-align: left;
    line-height: 70px;
    margin-left: 45px;
    &:first-of-type{
        color: #dadadb;
        font-size: 14px;
        margin-left: 0;
        margin-right: 55px;
    }
    &:hover {
        a:before {
          width: 100%;
        }
        a:after {
            width: 100%;
        }
    }
`
export const NavLink = styled(Link)`
    position: relative;
    color: #dadadb;
    font-size: 16px;
    text-decoration: none;
    padding-bottom: 5px;
    transition: 0.5s;
    &:hover {
        color: #fff;
    }
    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background: #F3a446;
        transition: 0.5s;
    }
    &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        background: orange;
        transition: 0.5s;
    }
`

export const NavIcon = styled.div`
    display: flex;
    width: 100px;
`

export const NavIconContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85px;
    padding-top: 20px;
    font-size: 21px;
`


export const SearchIcon = styled.div`
    color: #dadadb;
    width: 30%;
    text-align: center;
    cursor: pointer;
`

export const CartIcon = styled(Link)`
    width: 30%;
    position: relative;
    color: #dadadb;
    text-align: center;
    cursor: pointer;
    &:before {
        content: '0';
        position: absolute;
        top: 9px;
        right: -15px;
        width: 15px;
        height: 15px;
        line-height: 15px;
        text-align: center;
        font-size: 10px;
        background: orange;
        color: #000;
        border-radius: 4px;
        border-bottom-left-radius: unset;
    }
    &:hover {
        color: #dadadb;
    }
`