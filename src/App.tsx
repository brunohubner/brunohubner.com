import "./styles/global.scss"
import { ToggleMenuProvider } from "./context/ToggleMenuContext"
import { AppRoutes } from "./routes"
import { ProjectsProvider } from "./context/ProjectsContext"
import { useEffect } from "react"
import { pageMetrics } from "./analytics/pageMetrics"

export function App() {
    useEffect(pageMetrics, [])

    return (
        <ProjectsProvider>
            <ToggleMenuProvider>
                <AppRoutes />
            </ToggleMenuProvider>
        </ProjectsProvider>
    )
}
