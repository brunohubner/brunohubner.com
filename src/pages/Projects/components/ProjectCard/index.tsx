import "./styles.scss"
import image from "../../../../temp/example.png"

interface Props {
    name: string
    description: string
    thumbnail: string
    urlName: string
}

export function ProjectCard({ name, description, thumbnail, urlName }: Props) {
    return (
        <li className="ProjectCard">
            <div className="label">
                <h2>{name}</h2>
                <span>{description}</span>
            </div>
            <div className="background">
                <img src={image} alt={name} />
            </div>
        </li>
    )
}
