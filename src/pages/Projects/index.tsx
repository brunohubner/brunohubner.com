import "./styles.scss"
import { ProjectsList } from "./components/ProjectsList"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export function Projects() {
    return (
        <div className="Projects">
            <Header />
            <main className="main">
                <div className="presentation">
                    <h2>Aqui estao meus principais projetos</h2>
                    <span>
                        Uma breve descrição como estão organizados os projetos
                        apresentados nessa página
                    </span>
                </div>
                <ProjectsList />
            </main>
            <Footer />
        </div>
    )
}
