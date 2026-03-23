"use client";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Github, Linkedin } from "lucide-react";

function NavBar() {
    return (
        <section className="fixed-top d-flex justify-content-center w-100" style={{ background: "#0a0a0a" }}>
            <Container className="mt-3 mb-3">
                <Navbar expand="lg" variant="dark" className="px-4 py-2 rounded-5 shadow-lg bg-dark" style={{ border: "1px solid #333" }}>
                    <Container fluid>
                        <Navbar.Brand href="#Home" className="fw-bold">
                            ENGINEER<span className="text-primary">.SYS</span>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto align-items-center gap-lg-4 gap-2 py-3 py-lg-0 text-primary">
                                <Nav.Link href="#Projects">Projects</Nav.Link>
                                {/* <Nav.Link href="#Skills">Skills</Nav.Link> */}
                                <Nav.Link href="#Experience">Experience</Nav.Link>
                                {/* <Nav.Link href="#Contact">Contact</Nav.Link> */}

                                <div className="d-none d-lg-block">|</div>

                                <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
                                    <a href="https://github.com" className="text-secondary hover-primary" aria-label="Visit my GitHub profile">
                                        <Github size={20} aria-hidden="true" />
                                    </a>
                                    <a href="https://linkedin.com" className="text-secondary hover-primary" aria-label="Visit my LinkedIn profile">
                                        <Linkedin size={20} aria-hidden="true" />
                                    </a>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </section>
    );
}

export default NavBar;
