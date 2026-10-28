import { z } from "zod";
import { ProjectSchema, ExperienceSchema, EducationSchema, type Project, type Experience, type Education } from "@/types";

import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";

export async function getProjects(): Promise<Project[]> {
    // No more fs.readFile or path.join needed
    return z.array(ProjectSchema).parse(projectsData);
}

export async function getExperience(): Promise<Experience[]> {
    return z.array(ExperienceSchema).parse(experienceData);
}

export async function getEducation(): Promise<Education[]> {
    return z.array(EducationSchema).parse(educationData);
}
