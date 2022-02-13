import "./styles.scss"
import instagramIcon from "../../assets/socialMediasIcons/instagram.svg"
import twitterIcon from "../../assets/socialMediasIcons/twitter.svg"
import linkedinIcon from "../../assets/socialMediasIcons/linkedin.svg"
import { VscGithubInverted } from "react-icons/vsc"
import { Cursor } from "../../components/Cursor"
import { Link } from "react-router-dom"
import { createButtonMetrics } from "../../analytics/createButtonMetrics"

export function Header() {
    return (
        <header className="Header">
            <div className="logo">
                <div className="domainCode">
                    <Link to="/">brunohubner.com</Link>
                    <Cursor widthInRem={0.15} heightInRem={1.1} color="#fff" />
                </div>
            </div>
            <div className="socialMedias">
                <a
                    href="https://instagram.com/brunohubner01"
                    target="_blank"
                    rel="noreferrer"
                    title="@brunohubner01"
                    onClick={() => {
                        createButtonMetrics("Click in button 'Instagram'")
                    }}
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
                    onClick={() => {
                        createButtonMetrics("Click in button 'Twitter'")
                    }}
                >
                    <img src={twitterIcon} alt="twitter.com/brunohubner01" />
                </a>
                <a
                    href="https://linkedin.com/in/brunohubner01"
                    target="_blank"
                    rel="noreferrer"
                    title="@brunohubner01"
                    onClick={() => {
                        createButtonMetrics("Click in button 'LinkedIn'")
                    }}
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
                    onClick={() => {
                        createButtonMetrics("Click in button 'Github'")
                    }}
                >
                    <VscGithubInverted size={32} color="#fff" />
                </a>
            </div>
        </header>
    )
}
