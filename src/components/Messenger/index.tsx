import "./styles.scss"
import { Terminal } from "../Terminal"
import { SendButton } from "../SendButton"
import { TextareaHTMLAttributes, useState } from "react"
import { sendMessageService } from "../../services/sendMessageService"
import {
    GeoLocationData,
    getGeoLocationService
} from "../../services/getGeoLocationService"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    title: string
}

export function Messenger({ title, ...rest }: Props) {
    const [message, setMessage] = useState("")
    const [sended, setSended] = useState(false)
    const [placeholder, setPlaceholder] = useState("")
    const [terminalClicked, setTerminalClicked] = useState(false)
    const [loading, setLoading] = useState(false)
    const [geoLocation, setGeoLocation] = useState<GeoLocationData>({
        address: "",
        ip: ""
    })

    const handleMessage = (message: string) => {
        if (message.length > 3000) return
        setMessage(message)
    }

    const handleSendMessage = async () => {
        try {
            setLoading(true)
            await sendMessageService({
                message,
                address: geoLocation.address,
                ip: geoLocation.ip
            })
            setPlaceholder("Mensagem enviada para Bruno")
        } catch {
            setPlaceholder("Não foi possível enviar a mensagem")
        } finally {
            setMessage("")
            setSended(true)
            setLoading(false)
        }
    }

    const handleFirstClick = async () => {
        if (!terminalClicked) {
            const geoLocationData = await getGeoLocationService()
            setGeoLocation(geoLocationData)
            setTerminalClicked(true)
        }
    }

    if (sended) rest.placeholder = placeholder

    return (
        <div onClick={() => handleFirstClick()} className="Messenger">
            <Terminal title={title}>
                <textarea
                    value={message}
                    onChange={e => handleMessage(e.target.value)}
                    className="textarea"
                    disabled={loading}
                    style={{ color: loading ? "#888" : "#fff" }}
                    {...rest}
                />
                <div className="sendButton">
                    <SendButton
                        disabled={message.trim().length < 1 || loading}
                        onClick={handleSendMessage}
                    />
                </div>
            </Terminal>
        </div>
    )
}
