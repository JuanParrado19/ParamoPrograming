import React, {useEffect, useState} from 'react';
import { Link, NavLink} from 'react-router-dom';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText } from 'reactstrap';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState('Link');
    const toggle = () => setIsOpen(!isOpen);
    

    return (
        <Navbar id='brandLogo' className='position-fixed w-100' expand='sm'>
        <NavbarBrand href="/" className="logo">
            <img src='src\assets\Logo_descriptivo.png' className="img-fluid"  />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto align-items-end p-2" navbar>
            <NavItem>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link mx-3  activeLink ' : 'nav-link mx-3 Link')} >Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'nav-link mx-3  activeLink ' : 'nav-link mx-3 Link')} >Nosotros</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Servicios"  className={({ isActive }) => (isActive ? 'nav-link mx-3  activeLink ' : 'nav-link mx-3 Link')}>Servicios</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Contactanos"  className={({ isActive }) => (isActive ? 'nav-link mx-3  activeLink ' : 'nav-link mx-3 Link')}>Contactanos</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret onMouseOver={() => { setColor("activeLink") } } onMouseLeave={() => { setColor("Link") }}  className={`nav-link mx-3 ${color}`}>
                proyectos
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar >

       /* <Navbar color="transparent" expand='lg' >
            <NavbarBrand>
                <img src='src\assets\Logo_descriptivo.png' width='80px' />
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse className='navbar-collapse'>
                
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
            </Collapse>
        </Navbar> */

    );
}

export default NavBar;