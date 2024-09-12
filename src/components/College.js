import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ModalComponent from './Modal.js';
import '../css/College.css';
import CollegeData from '../Data/college.json';
import Icon from '@mdi/react';
import { mdiInformationVariantBox } from '@mdi/js';

export default function College() {
    const [modalData, setModalData] = useState(null);
    const [show, setShow] = useState(false);

    const handleShow = (college) => {
        setModalData(college);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <Container fluid id="college">
            <Row>
                <Col>
                    <h2 id='title'>
                        College
                    </h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {CollegeData.map(college => (
                    <Col md={6} key={college.id} className="mb-4">
                        <Card className="border-0" id="collegeCard" onClick={() => handleShow(college)} style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'} onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }} onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'} >
                            <Card.Body>
                                <Row>
                                    <Col className="text-end">
                                        <Icon path={mdiInformationVariantBox} size={1.5} />
                                    </Col>
                                </Row>
                                <Card.Title>{college.title}</Card.Title>
                                <Card.Text>{college.degree}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {modalData && (
                <ModalComponent show={show} handleClose={handleClose} college={modalData} />
            )}
        </Container>
    );
}