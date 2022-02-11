import "./styles.scss"
import { useNavigate } from "react-router-dom"

interface Props {
    label: string
    href: string
    selected: boolean
}

export function MenuItem({ href, label, selected }: Props) {
    const navigate = useNavigate()

    return (
        <li
            onClick={() => navigate(`/projects/${href}`)}
            className={`${selected ? "selected" : ""} MenuItem`}
        >
            {label}
        </li>
    )
}
