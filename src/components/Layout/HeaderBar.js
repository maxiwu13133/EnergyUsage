import React from 'react';
import { Navbar, NavDropdown, Container } from 'react-bootstrap';
import logo from '../../assets/icons/icon.svg';
const HeaderBar = () => {
  console.log(window.location)
  return (
    <Navbar bg='white' expand='lg'>
      <Container>
        <Navbar.Brand href='home'>
          <img
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='MinCasa Logo'
          />
        </Navbar.Brand>
        <Navbar.Brand>MinCasa</Navbar.Brand>
        <Navbar.Toggle />
        {window.location.pathname !== '/' ? 
        (
          <Navbar.Collapse className='justify-content-end'>
          <NavDropdown id='basic-nav-dropdown'>
            <NavDropdown.Item href='home'>Home</NavDropdown.Item>
            <NavDropdown.Item href='usage'>Usage</NavDropdown.Item>
            <NavDropdown.Item href='add-bill'>Add a Bill</NavDropdown.Item>
            <NavDropdown.Item href='achievements'>
              Achievements
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <Gear color='#94B447'/> */}
            <NavDropdown.Item href='settings'>Settings</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>) : null}
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
