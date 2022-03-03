import "./styles.scss"
import { useNavigate } from "react-router-dom"

interface Props {
    img: string
}

export function ProjectsLink({ img }: Props) {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate("/projects")} className="ProjectsLink">
            <div className="label">
                <h2>Meus Projetos Pessoais</h2>
                <span>
                    Veja a lista de alguns de meus projetos pessoais de código
                    aberto.
                </span>
            </div>
            <div className="background">
                <img src={img} alt="Projetos" />
            </div>
        </div>
    )
}
