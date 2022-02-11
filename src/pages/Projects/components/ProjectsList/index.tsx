import "./styles.scss"
import { ProjectCard } from "../ProjectCard"
import { useProjects } from "../../../../context/ProjectsContext"

interface Props {}

export function ProjectsList({}: Props) {
    const { projects } = useProjects()

    return (
        <ul className="ProjectList">
            {projects.map(project => (
                <ProjectCard project={project} />
            ))}
        </ul>
    )
}
