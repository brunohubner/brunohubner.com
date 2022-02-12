import "./styles.scss"
import { IoSendSharp } from "react-icons/io5"
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick(): void
}

export function SendButton({ onClick, ...rest }: Props) {
    return (
        <button
            type="button"
            onClick={() => onClick()}
            className="SendButton"
            {...rest}
        >
            <IoSendSharp size={30} />
        </button>
    )
}
