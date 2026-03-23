import { z } from "zod";
import fs from "fs/promises";
import path from "path";
import { ProjectSchema, ExperienceSchema, type Project, type Experience } from "@/types";

const DATA_PATH = path.join(process.cwd(), "src/data");

export async function getProjects(): Promise<Project[]> {
    const file = await fs.readFile(path.join(DATA_PATH, "projects.json"), "utf8");
    const data = JSON.parse(file);
    // Validates every project against the schema
    return z.array(ProjectSchema).parse(data);
}

export async function getExperience(): Promise<Experience[]> {
    const file = await fs.readFile(path.join(DATA_PATH, "experience.json"), "utf8");
    const data = JSON.parse(file);
    return z.array(ExperienceSchema).parse(data);
}
