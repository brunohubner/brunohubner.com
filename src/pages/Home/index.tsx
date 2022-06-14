import "./styles.scss"
import { Terminal } from "../../components/Terminal"
import { ProfileAvatar } from "./components/ProfileAvatar"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Messenger } from "../../components/Messenger"
import { DevIcons } from "./components/DevIcons"
import { ProjectsLink } from "./components/ProjectsLink"
import homeDataJson from "../../data/home.json"

type HomeData = {
    profileAvatar: string
    projectLinkImg: string
}

const homeData = homeDataJson as HomeData

export function Home() {
    return (
        <div className="Home">
            <Header />
            <main className="main">
                <section className="profile">
                    <div className="terminalBox">
                        <Terminal>
                            <div className="bio pcBio">
                                <br />
                                <p>
                                    Desenvolvedor de Software Full Stack Nodejs,
                                    formado em Análise e Desenvolvimento de
                                    Sistemas, especialista no desenvolvimento de
                                    soluções web utilizando Jamstack e suas
                                    principais tecnologias.
                                </p>
                                <br />
                                <p>
                                    Experiência com frameworks frontend como
                                    React, NextJs, Gatsby e GraphQl Apollo
                                    Client. E frameworks backend como Express,
                                    Nestjs, GraphQl Apollo Server, TypeORM,
                                    Mongoose e RabbitMQ.
                                </p>
                                <br />
                                <p>
                                    Experiência com SQL e com os bancos de dados
                                    PostgreSQL, MySQL, Microsoft SQL, Server,
                                    MongoDB e Redis.
                                </p>
                                <p>
                                    Experiência também outras tecnologias muito
                                    utilizadas no mercado como Microsserviços,
                                    Docker, Azure Devops e AWS.
                                </p>
                                <p>
                                    Nas horas vagas gosto de brincar um
                                    pouquinho com Data Science usando Python e
                                    com Blockchains e criptomoedas, mas apenas
                                    por hobby.
                                </p>
                            </div>
                            <div className="bio mobileBio">
                                <p>
                                    Desenvolvedor de Software Full Stack Nodejs,
                                    formado em Análise e Desenvolvimento de
                                    Sistemas, especialista no desenvolvimento
                                    web utilizando Jamstack e suas principais
                                    tecnologias como: JavaScript, TypeScript,
                                    React, Node, HTML, CSS, SQL, Python, Docker,
                                    Azure Devops e AWS.
                                </p>
                            </div>
                        </Terminal>
                    </div>
                    <ProfileAvatar img={homeData.profileAvatar} />
                </section>
                <div className="devicons">
                    <DevIcons />
                </div>
                <div className="interactive">
                    <ProjectsLink img={homeData.projectLinkImg} />
                    <div className="messenger">
                        <Messenger
                            title="chat"
                            placeholder="Envie uma mensagem para Bruno"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
