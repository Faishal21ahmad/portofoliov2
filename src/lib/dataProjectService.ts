import { project } from "@/types/projectsType";
import { projects } from "@/data/projects";

export function getProjectById(id: number): project | undefined {
    return projects.find((p) => p.id === id);
}

