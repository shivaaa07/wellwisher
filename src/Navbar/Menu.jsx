import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Menu.css"

const Menu = () => {
    const [expanded, setExpanded] = useState(false);

    const handleMenuClick = () => {
        setExpanded(false);
    }

    return(
        <>
            <header id="menu-wrapper">
                <Navbar expand="lg" className="bg-dark" expanded={expanded}>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src="images/logo.png" alt="Logo" className="logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={handleMenuClick} className="text-light">Home</Nav.Link>
                            <Nav.Link href="#overview" onClick={handleMenuClick} className="text-light">Overview</Nav.Link>
                            <Nav.Link href="#configuration" onClick={handleMenuClick} className="text-light">Configuration</Nav.Link>
                            <Nav.Link href="#ameGallery" onClick={handleMenuClick} className="text-light">Amenities</Nav.Link>
                            <Nav.Link href="#location" onClick={handleMenuClick} className="text-light">Location</Nav.Link>
                            <Nav.Link href="#contact" onClick={handleMenuClick} className="text-light">Contact Us</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        <Navbar.Brand href="#home" className="d-none d-lg-block">
                            <img src="images/devLogo.png" alt="Logo" className="logo"/>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
        </>
    )

}

export default Menu;
