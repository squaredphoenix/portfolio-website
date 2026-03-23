"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "@/styles/Hero.module.css";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql } from "react-icons/si";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MAIN_SKILLS = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React", icon: <SiReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
];

export default function Hero() {
    return (
        <section className={`${styles.heroWrapper} py-5 w-100`}>
            <Container>
                <Row className="m-0">
                    <Col className="p-0">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } },
                            }}
                        >
                            {/* Status Badge */}
                            <motion.div variants={fadeInUp} className={styles.mainBadge}>
                                <div className={styles.statusDot} />
                                SYSTEM_READY: v2
                            </motion.div>

                            {/* Headline */}
                            <motion.h1 variants={fadeInUp} className={`${styles.mainTitle} display-3 mb-4`}>
                                Crafting powerful <br />
                                <span className={styles.gradientText}>software solutions</span> for tomorrow.
                            </motion.h1>

                            <motion.p variants={fadeInUp} className={`${styles.subtitle} mb-5`}>
                                I am a <strong>Software Engineer</strong> dedicated to building high-performance systems and modern, distributed infrastructure.
                            </motion.p>

                            {/* Action Buttons */}
                            <motion.div variants={fadeInUp} className="d-flex gap-3 flex-wrap mb-5">
                                <Button className={styles.btnPrimary}>View Projects</Button>
                                {/* <Button className={styles.btnSecondary}>Read Resume</Button> */}
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <p className={styles.techTitle}>Core Tech Stack</p>
                                <div className="d-flex gap-3 flex-wrap">
                                    {MAIN_SKILLS.map((skill) => (
                                        <div key={skill.name} className={`d-flex gap-3 flex-wrap ${styles.techBadge} flex-fill flex-md-grow-0`}>
                                            <span>{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
