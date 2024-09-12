import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../css/about.css';
import 'animate.css';

export default function About(props) {
    return (
        <Container fluid id='aboutMe'>
            <div id="about">
                <Row>
                    <h2 className="col-12" id="title">
                        About Me
                    </h2>
                </Row>
                <Row>
                    <Col md={3}>
                        <Image src="desk.png" alt="Profile Picture" fluid />
                    </Col>
                    <Col md={9}>
                        <p>
                            I recently graduated with a major and a minor. I hold a Bachelor of Science in Software Design & Development, as well as an Associate of Science in Computer Programming and Analysis (Software Engineering Technology). I am fascinated by all things related to programming and am eager to continue learning and expanding my knowledge in the world of technology.
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}