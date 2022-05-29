import { useEffect, useState } from "react"

interface Props {
    widthInRem?: number
    heightInRem?: number
    color?: string
}

export function Cursor({
    color = "#fff",
    heightInRem = 1.1,
    widthInRem = 0.15
}: Props) {
    const [opacity, setOpacity] = useState("0")

    useEffect(() => {
        setTimeout(() => {
            return opacity === "0" ? setOpacity("1") : setOpacity("0")
        }, 500)
    }, [opacity])

    return (
        <div
            style={{
                width: `${widthInRem}rem`,
                height: `${heightInRem}rem`,
                backgroundColor: color,
                opacity
            }}
        ></div>
    )
}
