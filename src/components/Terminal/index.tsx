import { ReactNode } from "react"
import "./styles.scss"

interface Props {
    title?: string
    children: ReactNode
}

export function Terminal({ children, title = "brunohubner" }: Props) {
    return (
        <div className="Terminal">
            <div className="header">
                <div className="buttons">
                    <div className="btnRed"></div>
                    <div className="btnYellow"></div>
                    <div className="btnGreen"></div>
                </div>
                <div className="title">{title}</div>
            </div>
            <div className="body">
                <div className="text">{children}</div>
            </div>
        </div>
    )
}
