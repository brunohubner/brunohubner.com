import "./styles.scss"
import { Terminal } from "../../components/Terminal"
import { ProfileAvatar } from "./components/ProfileAvatar"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { DevIcons } from "./components/DevIcons"

export function Home() {
    return (
        <div className="Home">
            <Header />
            <main className="main">
                <section className="presentation">
                    <Terminal />
                    <ProfileAvatar />
                </section>
                <div className="devicons">
                    <DevIcons />
                </div>
            </main>
            <Footer />
        </div>
    )
}
