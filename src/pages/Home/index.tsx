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
                                    cursando Análise e Desenvolvimento de
                                    Sistemas, especialista no desenvolvimento
                                    web utilizando Jamstack e suas principais
                                    tecnologias.
                                </p>
                                <br />
                                <p>
                                    Sólida experiência com frameworks front-end
                                    como React, NextJs, Gatsby e GraphQl Apollo
                                    Client. E frameworks backend como Express,
                                    Nestjs, GraphQl Apollo Server, TypeORM,
                                    Mongoose e RabbitMQ.
                                </p>
                                <br />
                                <p>
                                    Além de esperiência com SQL e com os banco
                                    de dados PostgreSQL, MySQL, Microsofy SQL
                                    Server, MongoDB e Redis.
                                </p>
                            </div>
                            <div className="bio mobileBio">
                                <p>
                                    Desenvolvedor de Software Full Stack Nodejs,
                                    cursando Análise e Desenvolvimento de
                                    Sistemas, especialista no desenvolvimento
                                    web utilizando Jamstack e suas principais
                                    tecnologias como: JavaScript, TypeScript,
                                    React, Node, Nestjs, HTML, CSS, SQL,
                                    PostgreSQL e MongoDB.
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
