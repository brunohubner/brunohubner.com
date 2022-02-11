import "./styles.scss"
import image from "../../../../temp/projects.png"

interface Props {}

export function ProjectsLink({}: Props) {
    return (
        <div className="ProjectsLink">
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
