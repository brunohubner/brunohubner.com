import "./styles.scss"
import { ProjectCard } from "../ProjectCard"

interface Props {}

export function ProjectsList({}: Props) {
    return (
        <ul className="ProjectList">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </ul>
    )
}
