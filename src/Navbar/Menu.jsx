import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Menu.css"

const Menu = () => {

    return(
        <>
            <Navbar expand="lg" className="bg-dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="./public/logo.png" alt="Logo" className="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-light">Overview</Nav.Link>
                        <Nav.Link href="#link" className="text-light">Configuration</Nav.Link>
                        <Nav.Link href="#link" className="text-light">Amenities</Nav.Link>
                        <Nav.Link href="#link" className="text-light">Location</Nav.Link>
                        <Nav.Link href="#link" className="text-light">Gallery</Nav.Link>
                        <Nav.Link href="#link" className="text-light">Contact Us</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand href="#home" className="d-none d-lg-block">
                        <img src="./public/devLogo.png" alt="Logo" className="logo"/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )

}

export default Menu;