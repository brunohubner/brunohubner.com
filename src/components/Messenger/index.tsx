import "./styles.scss"
import { Terminal } from "../Terminal"
import { TextareaHTMLAttributes } from "react"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    title: string
}

export function Messenger({ title, ...rest }: Props) {
    return (
        <Terminal title={title}>
            <textarea className="Messenger textarea" {...rest} />
        </Terminal>
    )
}
