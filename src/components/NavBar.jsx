import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap';

const NavBar = () => {
    return (

        <Navbar color="transparent" expand='lg' >
            <NavbarBrand>
                <img src='src\assets\Logo_descriptivo.png' width='120px'/>
            </NavbarBrand>
            <Nav>
                <NavItem>
                    <Link to="/" >Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/" >Nosotros</Link>
                </NavItem>
                <NavItem>
                    <Link to="/" >Servicios</Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavBar;