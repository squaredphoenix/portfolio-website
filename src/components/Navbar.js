import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/NavBar.css';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="custom" variant="dark" className="navbar-custom">
            <Navbar.Brand href="#">
                <img src="logo.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#aboutMe">About Me</Nav.Link>
                    <Nav.Link href="#Skills">Skills</Nav.Link>
                    <Nav.Link href="#college">College</Nav.Link>
                    <Nav.Link href="#work">Work Experience</Nav.Link>
                    <Nav.Link href="#project">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;