import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import '../css/skills.css';

const SkillBars = (props) => {
    const sortedSkills = [...props.data].sort((a, b) => {
        if (a.level !== b.level) {
            return b.level - a.level; // Sort by level descending
        } else {
            return a.name.localeCompare(b.name); // Sort by name ascending
        }
    });

    return (
        <Container className="skills" fluid id="Skills">
            <div>
                <Row id='skills-list'>
                    <div className='skill-bars row'>
                        {sortedSkills.map((skill, index) => (
                            <Col md={6} key={index} id={index}>
                                <div className="skill">
                                    <div className="skill-label">{skill.name}</div>
                                    <div className="skill-progress">
                                        <ProgressBar now={skill.level} label={`${skill.level}%`} /> 
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </div>
                </Row>
            </div>
        </Container>
    );
};

export default SkillBars;