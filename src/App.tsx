import "./styles/global.scss"
import { ToggleMenuProvider } from "./context/ToggleMenuContext"
import { AppRoutes } from "./routes"
import { ProjectsProvider } from "./context/ProjectsContext"

export function App() {
    return (
        <ProjectsProvider>
            <ToggleMenuProvider>
                <AppRoutes />
            </ToggleMenuProvider>
        </ProjectsProvider>
    )
}
