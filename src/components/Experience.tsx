"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types";
import { Container, Badge } from "react-bootstrap";
import styles from "@/styles/Experiences.module.css";

interface ExperienceProps {
    experiences: Experience[];
}

export default function Experiences({ experiences }: ExperienceProps) {
    const num = experiences.length - 1;

    // Update your fadeInUp and add a container variant
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }, // Experiences appear one by one
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    } as const;

    return (
        <section className="py-5 w-100">
            <Container>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} // Prevents re-animating on every scroll
                    className={styles.title}
                >
                    <span className="text-primary font-mono">02. </span> Professional Path
                </motion.h2>

                {/* Added motion.div wrapper for staggering */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mt-5">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`position-relative ${styles.experienceItem}`}>
                            {/* Vertical Line */}
                            {index !== num && <div className={styles.verticalLine} />}

                            <div className="d-flex align-items-start gap-4 w-100">
                                {/* The Circle */}
                                <motion.div whileHover={{ scale: 1.2 }} className={`${styles.circle} d-flex justify-content-center align-items-center flex-shrink-0`}>
                                    <div className={styles.dot} />
                                </motion.div>

                                {/* Content Area */}
                                <motion.div variants={fadeInUp} className="flex-grow-1 pb-5">
                                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start mb-2">
                                        <div>
                                            <h3 className={styles.role}>{exp.role}</h3>
                                            <p className={`${styles.company} mb-2`}>{exp.company}</p>
                                        </div>
                                        <Badge bg="dark" className={styles.periodBadge}>
                                            {exp.period}
                                        </Badge>
                                    </div>

                                    <ul className={styles.list}>
                                        {exp.description.map((bullet, idx) => (
                                            <li key={idx} className="mb-2">
                                                <span className={styles.arrow}>▶</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
