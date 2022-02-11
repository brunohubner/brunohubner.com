import { useToggleMenu } from "../../context/ToggleMenuContext"
import { MenuItem } from "../MenuItem"
import "./styles.scss"

interface Props {}

export function Menu({}: Props) {
    const { isOpen } = useToggleMenu()

    return (
        <aside
            className="Menu"
            style={{
                left: isOpen ? "0" : "-250px"
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
