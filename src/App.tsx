import "./styles/global.scss"
import { ToggleMenuProvider } from "./context/ToggleMenuContext"
import { AppRoutes } from "./routes"
import { ProjectsProvider } from "./context/ProjectsContext"
import { useEffect } from "react"
import { activateBackend } from "./services/activateBackend"

export function App() {
    useEffect(() => {
        activateBackend()
    })

    return (
        <ProjectsProvider>
            <ToggleMenuProvider>
                <AppRoutes />
            </ToggleMenuProvider>
        </ProjectsProvider>
    )
}
