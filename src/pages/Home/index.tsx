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
                                <p>
                                    Programador Full Stack, cursando o último
                                    período de Análise e Desenvolvimento de
                                    Sistemas especialista em desenvolvimento de
                                    aplicações completas para web utilizando as
                                    linguagens JavaScript, TypeScript, Python,
                                    Java, HTML e CSS.
                                </p>
                                <p>
                                    Sólida experiência com frameworks front-end
                                    como React, NextJs, GraphQl Apollo Client ,
                                    Sass, Styled Components e frameworks backend
                                    como Express, GraphQl Apollo Server, Json
                                    Web Token, Bcrypt, TypeORM, Knex Query
                                    Builder, Prisma e Mongoose.
                                </p>
                                <p>
                                    Além de esperiência com SQL e com os banco
                                    de dados PostgreSQL, MySQL, MongoDB e Redis.
                                </p>
                            </div>
                            <div className="bio mobileBio">
                                <p>
                                    Programador Full Stack, cursando o último
                                    período de Análise e Desenvolvimento de
                                    Sistemas especialista em desenvolvimento de
                                    aplicações completas para web utilizando
                                    JavaScript, TypeScript, React, Node, Express
                                    Python, Java, HTML, CSS, SQL, PostgreSQL e
                                    MongoDB.
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
