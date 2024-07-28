import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import '../css/Welcome.css';

const Welcome = () => {
    return (
        <div className="top-div">
            <Row id="intro" className="text-light justify-content-center align-items-center text-center mb-5 animate__animated animate__fadeIn">
                <Col md={4} className="py-4">
                    <Image src="https://placehold.co/1200x800" alt="Profile Picture" roundedCircle fluid />
                </Col>
                <Col md={8} className="my-auto animate__animated animate__fadeIn">
                    <h1 className="display-4">Welcome to My Software Engineer / Programmer Portfolio</h1>
                    <p className="lead">Crafting digital experiences with passion and precision.</p>
                    <p>Scroll down to explore my projects, skills, and much more.</p>
                    <Button href="#projects" className="btn">View Projects</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Welcome;