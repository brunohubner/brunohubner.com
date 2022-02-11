import "./styles.scss"
import { useNavigate } from "react-router-dom"

interface Props {
    label: string
    href: string
}

export function MenuItem({ href, label }: Props) {
    const navigate = useNavigate()

    return (
        <li onClick={() => navigate(`/projects/${href}`)} className="MenuItem">
            {label}
        </li>
    )
}
