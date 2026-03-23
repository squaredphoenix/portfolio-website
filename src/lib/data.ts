import { z } from "zod";
import { ProjectSchema, ExperienceSchema, type Project, type Experience } from "@/types";

import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";

export async function getProjects(): Promise<Project[]> {
    // No more fs.readFile or path.join needed
    return z.array(ProjectSchema).parse(projectsData);
}

export async function getExperience(): Promise<Experience[]> {
    return z.array(ExperienceSchema).parse(experienceData);
}
