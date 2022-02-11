import "./styles.scss"
import image from "../../../../temp/example.png"
import { useNavigate } from "react-router-dom"
import { Project } from "../../../../models/Project"

interface Props {
    project: Project
}

export function ProjectCard({ project }: Props) {
    const navigate = useNavigate()

    const navigateToProject = () => {
        navigate(`/projects/${project.urlName}`)
    }

    return (
        <li onClick={() => navigateToProject()} className="ProjectCard">
            <div className="label">
                <h2>{project.name}</h2>
                <span>{project.description}</span>
            </div>
            <div className="background">
                <img src={image} alt={project.name} />
            </div>
        </li>
    )
}
