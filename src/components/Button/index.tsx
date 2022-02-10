import { ButtonHTMLAttributes } from "react"
import colors from "../../styles/colors"
import "./styles.scss"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    color?: string
    bgColor?: string
    borderColor?: string
}

export function Button({ label, color, bgColor, borderColor, ...rest }: Props) {
    return (
        <button
            {...rest}
            className="Button"
            style={{
                border: `1px solid ${borderColor || colors.gray}`,
                backgroundColor: bgColor || colors.gray,
                color: color || colors.white
            }}
        >
            {label}
        </button>
    )
}
