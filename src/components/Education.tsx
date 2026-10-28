"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Badge } from "react-bootstrap";
import { Education } from "@/types";
import styles from "@/styles/Education.module.css";

interface EducationProps {
    education: Education[];
}

function EducationCard({ edu, index }: { edu: Education; index: number }) {
    const [open, setOpen] = useState(index === 0); // first card open by default

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            className={styles.card}
        >
            {/* ── Clickable header ── */}
            <div
                className={styles.header}
                onClick={() => setOpen((prev) => !prev)}
                role="button"
                aria-expanded={open}
                aria-controls={`edu-body-${index}`}
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen((prev) => !prev)}
            >
                <div className={styles.headerLeft}>
                    <div className={styles.iconWrap} aria-hidden="true">
                        🎓
                    </div>
                    <div>
                        <p className={styles.institution}>{edu.institution}</p>
                        <p className={styles.degree}>
                            {edu.degree} · {edu.field}
                        </p>
                    </div>
                </div>

                {/* Chevron */}
                <motion.svg
                    className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <polyline points="6 9 12 15 18 9" />
                </motion.svg>
            </div>

            {/* ── Animated body ── */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        id={`edu-body-${index}`}
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <div className={styles.divider} />
                        <div className={styles.body}>
                            {/* Meta badges */}
                            <div className={styles.metaRow}>
                                <Badge className={styles.metaBadge}>{edu.period}</Badge>
                                <Badge className={styles.metaBadge}>📍 {edu.location}</Badge>
                                {edu.gpa && (
                                    <Badge className={styles.metaBadge}>GPA {edu.gpa}</Badge>
                                )}
                            </div>

                            {/* Highlights */}
                            {edu.highlights.length > 0 && (
                                <>
                                    <p className={styles.highlightsLabel}>Highlights</p>
                                    <ul className={styles.highlights}>
                                        {edu.highlights.map((item, i) => (
                                            <li key={i}>
                                                <span className={styles.arrow} aria-hidden="true">▶</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {/* Relevant Courses */}
                            {edu.courses && edu.courses.length > 0 && (
                                <>
                                    <p className={styles.coursesLabel}>Relevant Coursework</p>
                                    <div className={styles.courses}>
                                        {edu.courses.map((course, i) => (
                                            <span key={i} className={styles.coursePill}>
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function EducationSection({ education }: EducationProps) {
    return (
        <section className="py-5 w-100">
            <Container>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={styles.title}
                >
                    <span className="text-success font-mono">03. </span> Education
                </motion.h2>

                <div className="mt-5 d-flex flex-column gap-3">
                    {education.map((edu, i) => (
                        <EducationCard key={i} edu={edu} index={i} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
