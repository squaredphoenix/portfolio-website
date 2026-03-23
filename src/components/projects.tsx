"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "@/styles/Projects.module.css";

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section className="py-5 w-100">
            <Container>
                <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className={styles.title}>
                    <span className="text-primary font-mono">01. </span> Projects
                </motion.h2>

                <Row className="mt-4 g-4">
                    {projects.map((project, index) => (
                        <Col key={project.id} lg={4} md={6} xs={12}>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -10 }} className="h-100">
                                <Card className={`${styles.projectCard} h-100`}>
                                    <Card.Body className="d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <Card.Title className={styles.projectTitle}>{project.title}</Card.Title>
                                            <div className={styles.links}>
                                                {project.githubUrl && (
                                                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="me-2" aria-label={`${project.githunAria}`}>
                                                        <Github size={20} />
                                                    </a>
                                                )}
                                                {project.demoUrl && (
                                                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                                                        <ExternalLink size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <Card.Text className={styles.description}>{project.description}</Card.Text>

                                        <div className="mt-auto pt-3 d-flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className={styles.tag}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
