import "./styles.scss"
import { VscMenu, VscClose } from "react-icons/vsc"

interface Props {}

export function ToggleMenu({}: Props) {
    return (
        <div className="ToggleMenu">
            <VscMenu size={24} />
            {/* <VscClose size={28} /> */}
        </div>
    )
}
