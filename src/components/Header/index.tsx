import "./styles.scss"
import instagramIcon from "../../assets/socialMediasIcons/instagram.svg"
import twitterIcon from "../../assets/socialMediasIcons/twitter.svg"
import linkedinIcon from "../../assets/socialMediasIcons/linkedin.svg"
import { VscGithubInverted } from "react-icons/vsc"
import { useEffect, useState } from "react"

interface Props {}

export function Header({}: Props) {
    const [displayCursor, setDisplayCursor] = useState("0")

    useEffect(() => {
        setTimeout(() => {
            return displayCursor === "0"
                ? setDisplayCursor("1")
                : setDisplayCursor("0")
        }, 500)
    }, [displayCursor])

    return (
        <header className="Header">
            <div className="logo">
                <div className="terminal">
                    <a href="/">brunohubner.com</a>
                    <div
                        className="cursor"
                        style={{
                            opacity: displayCursor
                        }}
                    ></div>
                </div>
            </div>
            <div className="socialMedias">
                <a
                    href="https://instagram.com/brunohubner01"
                    target="_blank"
                    rel="noreferrer"
                    title="@brunohubner01"
                >
                    <img
                        src={instagramIcon}
                        alt="instagram.com/brunohubner01"
                    />
                </a>
                <a
                    href="https://twitter.com/brunohubner01"
                    target="_blank"
                    rel="noreferrer"
                    title="@brunohubner01"
                >
                    <img src={twitterIcon} alt="twitter.com/brunohubner01" />
                </a>
                <a
                    href="https://linkedin.com/in/brunohubner01"
                    target="_blank"
                    rel="noreferrer"
                    title="@brunohubner01"
                >
                    <img
                        src={linkedinIcon}
                        alt="linkedin.com/in/brunohubner01"
                    />
                </a>
                <a
                    href="https://github.com/brunohubner"
                    target="_blank"
                    rel="noreferrer"
                    title="@brunohubner"
                >
                    <VscGithubInverted size={32} color="#fff" />
                </a>
            </div>
        </header>
    )
}
