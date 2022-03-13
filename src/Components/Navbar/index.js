import Search from '../Search';
import { useState } from 'react';
import './style.css';
import {Nav, NavContainer, Logo, LogoImg, Navcollapse, NavItem, NavLink, NavItemList, NavIcon,
     NavIconContent, SearchIcon, CartIcon} from './style';
import {BsSearch} from "react-icons/bs";
import {RiShoppingBasketLine} from "react-icons/ri";
import $ from 'jquery';
import Popper from 'popper.js';

const Navbar = () => {

    const [mark, setMark] = useState(false);
    const [navColor, setNavColor] = useState(false);
    const [navRoute, setNavRoute] = useState(false);

    const handleSearch = () => {setMark(prev => !prev)};
    const handleRoute = () => {setNavRoute(true)};
    const stopRoute = () => {setNavRoute(false)};
    const changeNavColor = () => {
        if (window.scrollY >= 80) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    };

    window.addEventListener('scroll', changeNavColor);

    return(
        <Nav className={
            navColor || navRoute? " nav-active navbar-expand-lg navbar-light" : "navbar-expand-lg navbar-light"}>
            <Search mark = {mark} handleSearch= {handleSearch}/>
            <NavContainer className="container-fluid">
                <Logo>
                    <LogoImg src="images/logo-hen.png" className={navColor || navRoute? 'hide' : ''}/>
                    <LogoImg src="images/logo-re.png" className={navColor || navRoute? 'show' : 'hide'} re/>
                </Logo>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Navcollapse className="collapse navbar-collapse" id="navbarNav">
                    <NavItemList className="navbar-nav">
                        <NavItem className="nav-item">+201530214514</NavItem>
                        <NavItem className="nav-item">
                            <NavLink to="/" onClick={stopRoute}>Home</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink to="/about" onClick={handleRoute}>About Us</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink to="/shop" onClick={handleRoute}>Shop</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink to="/contact">Contacts</NavLink>
                        </NavItem>
                    </NavItemList>
                </Navcollapse>
                <NavIcon>
                    <NavIconContent>
                        <SearchIcon  onClick ={() => {handleSearch()}}><BsSearch /></SearchIcon>
                        <CartIcon to="/cart" onClick={handleRoute}><RiShoppingBasketLine/></CartIcon>
                    </NavIconContent>   
                </NavIcon>
            </NavContainer>
        </Nav>
    )
}

export default Navbar;