import "./styles.scss"
import { Link } from "react-router-dom"

interface Props {
    label: string
    href: string
}

export function MenuItem({ href, label }: Props) {
    return (
        <li className="MenuItem">
            <a href={href}>{label}</a>
        </li>
    )
}
