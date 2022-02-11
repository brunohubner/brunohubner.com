import "./styles.scss"
import { VscMenu, VscClose } from "react-icons/vsc"
import { useToggleMenu } from "../../context/ToggleMenuContext"

interface Props {}

export function ToggleMenu({}: Props) {
    const { isOpen, toggleMenu } = useToggleMenu()

    return (
        <div onClick={() => toggleMenu()} className="ToggleMenu">
            {isOpen ? <VscClose size={28} /> : <VscMenu size={24} />}
        </div>
    )
}
