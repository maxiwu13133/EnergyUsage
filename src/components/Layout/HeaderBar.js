
import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
// import { Gear } from "react-bootstrap-icons";
import logo from '../../assets/icons/icon.svg'
const HeaderBar = () => {
  return (
    <Navbar bg="light" expand="lg">

  <Container>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="MinCasa Logo"
      />
    </Navbar.Brand>
        <Navbar.Brand href="#home">MinCasa</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        {/* <NavDropdown.Toggle aria-controls="basic-navbar-nav"><Gear color='#94B447'/></NavDropdown.Toggle> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;