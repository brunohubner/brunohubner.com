import "./styles.scss"
import image from "../../../../temp/projects.png"
import { useNavigate } from "react-router-dom"

export function ProjectsLink() {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate("/projects")} className="ProjectsLink">
            <div className="label">
                <h2>Meus Projetos Pessois</h2>
                <span>
                    Veja a lista de alguns de meus projetos pessoais de código
                    aberto.
                </span>
            </div>
            <div className="background">
                <img src={image} alt="Projetos" />
            </div>
        </div>
    )
}
