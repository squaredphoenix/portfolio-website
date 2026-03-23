import { Container } from "react-bootstrap";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experiences from "@/components/Experience";
import { getProjects, getExperience } from "@/lib/data";
import styles from "./page.module.css";

export default async function Home() {
    const projectData = await getProjects();
    const experienceData = await getExperience();

    return (
        <Container fluid className="p-0 m-0" id="Home">
            <main className={`${styles.main} w-100`}>
                <div className={`${styles.hero} w-100 d-flex align-items-center justify-content-center mb-4`}>
                    <Hero />
                </div>
                <div className={`w-100 d-flex align-items-center justify-content-center mb-4`} id="Projects" style={{ scrollMarginTop: "100px" }}>
                    <Projects projects={projectData} />
                </div>
                <div className={`w-100 d-flex align-items-center justify-content-center`} id="Experience" style={{ scrollMarginTop: "100px" }}>
                    <Experiences experiences={experienceData} />
                </div>
            </main>
        </Container>
    );
}
