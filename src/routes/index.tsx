import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Projects } from "../pages/Projects"
import { ProjectId } from "../pages/ProjectId"
import { Home } from "../pages/Home"
import { ScrollToTop } from "./ScrollToTop"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/projects/:url_name" element={<ProjectId />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    )
}
