import "./styles.scss"
import image from "../../../../temp/example.png"

interface Props {}

export function ProjectCard({}: Props) {
    return (
        <li className="ProjectCard">
            <div className="label">
                <h2>Nome do Projeto</h2>
                <span>
                    Esta é uma breve descrição sobre o projeto apresentado.
                </span>
            </div>
            <div className="background">
                <img src={image} alt="" />
            </div>
        </li>
    )
}
