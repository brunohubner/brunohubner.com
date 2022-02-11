import { useProjects } from "../../context/ProjectsContext"
import { useToggleMenu } from "../../context/ToggleMenuContext"
import { MenuItem } from "../MenuItem"
import "./styles.scss"

interface Props {}

export function Menu({}: Props) {
    const { isOpen } = useToggleMenu()
    const { projects } = useProjects()

    const left = isOpen ? "0" : "-250px"

    return (
        <aside className="Menu" style={{ left }}>
            <ul>
                {projects.map(project => (
                    <MenuItem
                        key={project.id}
                        label={project.name}
                        href={project.urlName}
                    />
                ))}
            </ul>
        </aside>
    )
}
