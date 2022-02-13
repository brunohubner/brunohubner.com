import "./styles.scss"
import { Terminal } from "../Terminal"
import { SendButton } from "../SendButton"
import { TextareaHTMLAttributes, useState } from "react"
import { sendMessageService } from "../../services/sendMessageService"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    title: string
}

export function Messenger({ title, ...rest }: Props) {
    const [message, setMessage] = useState("")
    const [sended, setSended] = useState(false)
    const [placeholder, setPlaceholder] = useState("")

    const handleMessage = (message: string) => {
        if (message.length > 3000) return
        setMessage(message)
    }

    const handleSendMessage = async () => {
        try {
            await sendMessageService(message)
            setPlaceholder("Mensagem enviada para Bruno")
        } catch {
            setPlaceholder("Não foi possível enviar a mensagem")
        } finally {
            setMessage("")
            setSended(true)
        }
    }

    if (sended) rest.placeholder = placeholder

    return (
        <div className="Messenger">
            <Terminal title={title}>
                <textarea
                    value={message}
                    onChange={e => handleMessage(e.target.value)}
                    className="textarea"
                    {...rest}
                />
                <div className="sendButton">
                    <SendButton
                        disabled={message.trim().length < 1}
                        onClick={handleSendMessage}
                    />
                </div>
            </Terminal>
        </div>
    )
}
