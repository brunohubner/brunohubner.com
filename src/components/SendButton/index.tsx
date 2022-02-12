import "./styles.scss"
import { IoSendSharp } from "react-icons/io5"

interface Props {
    onClick(): void
}

export function SendButton({ onClick }: Props) {
    return (
        <button type="button" onClick={() => onClick()} className="SendButton">
            <IoSendSharp size={30} />
        </button>
    )
}
