import { createContext, ReactNode, useContext, useState } from "react"
import { Project } from "../models/Project"
import projectsJson from "../data/projects.json"

interface Props {
    children: ReactNode
}

interface Context {
    projects: Project[]
}

const initialState = {
    projects: projectsJson as Project[]
}

const ProjectsContext = createContext<Context>(initialState)

export function useProjects() {
    return useContext(ProjectsContext)
}

export function ProjectsProvider({ children }: Props) {
    const [projects] = useState<Project[]>(initialState.projects)

    return (
        <ProjectsContext.Provider value={{ projects }}>
            {children}
        </ProjectsContext.Provider>
    )
}
