import "./styles.scss"
import { Terminal } from "../Terminal"
import { SendButton } from "../SendButton"
import { TextareaHTMLAttributes } from "react"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    title: string
}

export function Messenger({ title, ...rest }: Props) {
    return (
        <div className="Messenger">
            <Terminal title={title}>
                <textarea className="textarea" {...rest} />
                <div className="sendButton">
                    <SendButton onClick={() => console.log("enviando...")} />
                </div>
            </Terminal>
        </div>
    )
}
