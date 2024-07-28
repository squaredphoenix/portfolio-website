import React from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import '../css/projects.css';
import projects from "../Data/projects.json";

const Projects = () => {
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col className="text-center">
                    <h2 className='col-12' id='title'>
                        Projects
                    </h2>
                </Col>
            </Row>
            <Row id="projects" className="justify-content-center">
                {projects.map((project, index) => (
                    project.post === "yes" && (
                    <Col xl={3} md={6} xs={12} key={index} className='mt-4' id='project-col'>
                        <Card className='border-0 card-hover mx-auto text-center' id='project-col'>
                            <Card.Header className="d-flex justify-content-center align-items-center card-header">
                                <Image src={project.imageSrc} alt={project.alt} fluid className="rounded card-img" />
                            </Card.Header>
                            <Card.Body className="card-overlay">
                                <Card.Title className="mb-2">{project.title}</Card.Title>
                                <Card.Text className="mb-2">
                                    {project.description}
                                </Card.Text>
                                <Card.Text className="mb-1">
                                    <strong>Programming Languages - </strong>
                                </Card.Text>
                                <Card.Text>
                                    {project.skills.map((skill, id) => (
                                        <span key={id}>
                                            {skill}
                                            {id < project.skills.length - 1 ? ', ' : ''}
                                        </span>
                                    ))}
                                </Card.Text>
                                <Button href={project.source} variant="dark" className="w-100 py-2 d-flex align-items-center justify-content-center" target="_blank">
                                    <i className="fab fa-github fa-lg"></i>&nbsp;<span>View on GitHub</span>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )))}
            </Row>
        </Container>
    );
};

export default Projects;