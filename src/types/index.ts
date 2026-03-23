import { z } from "zod";

// Project Schema
export const ProjectSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    tags: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    image: z.string(), // Path to public folder image
    featured: z.boolean().default(false),
    githunAria: z.string(),
});

// Experience Schema
export const ExperienceSchema = z.object({
    company: z.string(),
    role: z.string(),
    location: z.string(),
    period: z.string(), // e.g., "Jan 2024 - Present"
    description: z.array(z.string()),
    skills: z.array(z.string()),
});

export type Project = z.infer<typeof ProjectSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
