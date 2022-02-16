import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Projects } from "../pages/Projects"
import { ProjectId } from "../pages/ProjectId"
import { Home } from "../pages/Home"
import { ScrollToTop } from "./ScrollToTop"
import { PageNotFound } from "../pages/PageNotFound"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/projects/:url_name" element={<ProjectId />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    )
}
