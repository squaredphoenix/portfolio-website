import React from 'react';
import { Modal, Button, Card, Row, Col } from 'react-bootstrap';

const ModalComponent = ({ show, handleClose, college }) => {
    return (
        <Modal show={show} onHide={handleClose} dialogClassName="wider-modal">
            <Modal.Header closeButton>
                <Modal.Title>{college.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Degree:</strong> {college.degree}</p>
                <h5>Courses:</h5>
                <Row>
                    {college.courses.map((course, index) => (
                        <Col md={3} key={index} className="mb-3">
                            <Card className="course-card border-0">
                                <Card.Body>
                                    <Card.Text>{course}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComponent;