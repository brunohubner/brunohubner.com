import { createContext, ReactNode, useContext, useState } from "react"

interface Props {
    children: ReactNode
}

interface Context {
    isOpen: boolean
    toggleMenu(): void
}

const initialState = {
    isOpen: false,
    toggleMenu() {}
}

const ToggleMenuContext = createContext<Context>(initialState)

export function useToggleMenu() {
    return useContext(ToggleMenuContext)
}

export function ToggleMenuProvider({ children }: Props) {
    const [isOpen, setIsOpen] = useState(initialState.isOpen)

    const toggleMenu = () => setIsOpen(old => !old)

    return (
        <ToggleMenuContext.Provider
            value={{
                isOpen,
                toggleMenu
            }}
        >
            {children}
        </ToggleMenuContext.Provider>
    )
}
