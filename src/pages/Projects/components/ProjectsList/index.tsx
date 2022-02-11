import "./styles.scss"
import { ProjectCard } from "../ProjectCard"
import { useProjects } from "../../../../context/ProjectsContext"

export function ProjectsList() {
    const { projects } = useProjects()

    return (
        <ul className="ProjectList">
            {projects.map(project => (
                <ProjectCard project={project} />
            ))}
        </ul>
    )
}
