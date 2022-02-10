import "./styles.scss"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Menu } from "../../components/Menu"
import imageExample from "../../temp/example.png"
import colors from "../../styles/colors"

interface Props {
    name: string
    description: string
    content: string
    thumbnail?: string
    extraImages?: string[]
    repositoryLink?: string
    productionLink?: string
}

export function ProjectId({
    content,
    description,
    extraImages,
    name,
    thumbnail,
    productionLink,
    repositoryLink
}: Props) {
    return (
        <div className="ProjectId">
            <Menu />
            <Header />
            <main className="main">
                <div className="presentation">
                    <h1>{name}</h1>
                    <span>{description}</span>
                    <div className="links">
                        <Button
                            label="Código fonte"
                            bgColor={colors.primaryDark}
                        />
                        <Button
                            label="Link do Projeto"
                            color={colors.black}
                            bgColor={colors.white}
                        />
                    </div>
                </div>
                <section className="content">
                    <div className="thumbnail">
                        <img src={imageExample} alt={name} />
                    </div>
                    <p>{content}</p>
                    {/* <div className="extraImages">
                        {extraImages.map(image => (
                            <img src={image} alt={name}></img>
                        ))}
                    </div> */}
                </section>
            </main>
            <Footer />
        </div>
    )
}
