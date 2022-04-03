import React from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Gear } from 'react-bootstrap-icons';
import logo from '../../assets/icons/icon.svg';
const HeaderBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
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
        <Navbar.Collapse className='justify-content-end'>
          <NavDropdown id='basic-nav-dropdown'>
            <NavDropdown.Item href='usage'>Usage</NavDropdown.Item>
            <NavDropdown.Item href='add-bill'>Add a Bill</NavDropdown.Item>
            <NavDropdown.Item href='achievements'>
              Achievements
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <Gear color='#94B447'/> */}
            <NavDropdown.Item href='settings'>Settings</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
