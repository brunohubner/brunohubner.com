import { MenuItem } from "../MenuItem"
import "./styles.scss"

interface Props {}

export function Menu({}: Props) {
    return (
        <aside
            className="Menu"
            style={{
                display: "none"
            }}
        >
            <ul>
                <MenuItem label="Projeto" href="/" />
                <MenuItem label="Projeto" href="/" />
                <MenuItem label="Projeto" href="/" />
                <MenuItem label="Projeto" href="/" />
                <MenuItem label="Projeto" href="/" />
                <MenuItem label="Projeto" href="/" />
                <MenuItem label="Projeto" href="/" />
                <MenuItem label="Projeto" href="/" />
                <MenuItem label="Projeto" href="/" />
                <MenuItem label="Projeto" href="/" />
                <MenuItem label="Projeto" href="/" />
                <MenuItem label="Projeto" href="/" />
                <MenuItem label="Projeto" href="/" />
            </ul>
        </aside>
    )
}
