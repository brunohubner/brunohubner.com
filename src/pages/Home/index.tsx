import "./styles.scss"
import { Terminal } from "../../components/Terminal"
import { ProfileAvatar } from "./components/ProfileAvatar"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Messenger } from "../../components/Messenger"
import { DevIcons } from "./components/DevIcons"
import { ProjectsLink } from "./components/ProjectsLink"

export function Home() {
    return (
        <div className="Home">
            <Header />
            <main className="main">
                <section className="profile">
                    <div className="terminalBox">
                        <Terminal>
                            $ git commit -m "feat: brunohubner.com works"
                        </Terminal>
                    </div>
                    <ProfileAvatar />
                </section>
                <div className="devicons">
                    <DevIcons />
                </div>
                <div className="interactive">
                    <ProjectsLink />
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
