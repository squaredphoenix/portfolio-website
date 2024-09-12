import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Work.css';
import work from '../Data/work.json';

const Work = () => {
    return (
        <Container className="work" id="work">
            {work.map((workItem, id) => {
                return (
                    <Row key={id} className="workItem mb-4">
                        <Col lg={3} md={3}>
                            <img src={workItem.imageSrc} alt={`${workItem.organisation} Logo`} />
                        </Col>
                        <Col className="workItemDetails" lg={9} md={9}>
                            <Row>
                                <Col>
                                    <h3>{`${workItem.role}, ${workItem.organisation}`}</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{`${workItem.startDate} - ${workItem.endDate}`}</p>
                                </Col>
                            </Row>
                            <Row>
                                <ul>
                                    <Row key={id} id="experience">
                                        {workItem.experiences.map((experience, id) => {
                                            const isLastItem = id === workItem.experiences.length - 1;
                                            return (
                                                <Col lg={6} xs={12} className={isLastItem ? 'flex-grow-1' : ''} key={id}>
                                                    <li>
                                                        {experience}
                                                    </li>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                );
            })}
        </Container>
    );
};

export default Work;