import "./styles.scss"
import { ProjectCard } from "../ProjectCard"
import { useProjects } from "../../../../context/ProjectsContext"

interface Props {}

export function ProjectsList({}: Props) {
    const { projects } = useProjects()

    return (
        <ul className="ProjectList">
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    urlName={project.urlName}
                    thumbnail={project.urlName}
                />
            ))}
        </ul>
    )
}
