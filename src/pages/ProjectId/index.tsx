import "./styles.scss"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Menu } from "../../components/Menu"
import { ToggleMenu } from "../../components/ToggleMenu"
import imageExample from "../../temp/example.png"
import colors from "../../styles/colors"
import { useProjects } from "../../context/ProjectsContext"
import { useParams } from "react-router-dom"
import { PageNotFound } from "../PageNotFound"
import { createButtonMetrics } from "../../analytics/createButtonMetrics"

export function ProjectId() {
    const { projects } = useProjects()
    const { url_name } = useParams()

    const project = projects.find(item => item.urlName === url_name)

    if (!project) return <PageNotFound />

    return (
        <div className="ProjectId">
            <ToggleMenu />
            <Menu selected={url_name} />
            <Header />
            <main className="mainProject">
                <div className="presentation">
                    <h1>{project.name}</h1>
                    <span>{project.description}</span>
                    <div className="links">
                        <Button
                            label="Código fonte"
                            bgColor={colors.primaryDark}
                            onClick={() => {
                                createButtonMetrics(
                                    "Click in button 'Código Fonte'"
                                )
                            }}
                        />
                        <Button
                            label="Link do Projeto"
                            color={colors.black}
                            bgColor={colors.white}
                            onClick={() => {
                                createButtonMetrics(
                                    "Click in button 'Link da Projeto'"
                                )
                            }}
                        />
                    </div>
                </div>
                <section className="content">
                    <div className="thumbnail">
                        <img src={imageExample} alt={project.name} />
                    </div>
                    <p>{project.content}</p>
                </section>
            </main>
            <Footer />
        </div>
    )
}
