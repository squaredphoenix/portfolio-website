import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import SkillBars from './Skills';
import Work from './Work';

import '../css/Experience.css';

import Skills from '../Data/skills.json';

const Experience = () => {
    return (
        <Container fluid id="Experience">
            <div id="ExperienceDiv">
                <Row>
                    <Col>
                        <h2 className='col-12' id='title'>
                            Experience
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} className="mb-4">
                        <SkillBars data={Skills} />
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <Work />
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Experience;