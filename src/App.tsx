import "./styles/global.scss"
import { ToggleMenuProvider } from "./context/ToggleMenuContext"
import { AppRoutes } from "./routes"

export function App() {
    return (
        <ToggleMenuProvider>
            <AppRoutes />
        </ToggleMenuProvider>
    )
}
