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
                    <h2>Alguns de meus projetos de Código Aberto</h2>
                    <span>
                        Os projetos listados abaixo foram desenvolvidos por mim
                        para fins didáticos. Nenhum desses projetos são
                        utilizados para fins lucrativos. Na página de cada
                        projeto você tem acesso ao link do código fonte, ao link
                        de acesso para o projeto functionando online, além de
                        algumas imagens e a explicação do mesmo.
                    </span>
                </div>
                <ProjectsList />
            </main>
            <Footer />
        </div>
    )
}
