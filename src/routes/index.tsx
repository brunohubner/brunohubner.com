import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Projects } from "../pages/Projects"
import { ProjectId } from "../pages/ProjectId"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/projects/:url_name" element={<ProjectId />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}
