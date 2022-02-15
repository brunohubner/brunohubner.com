import { ReactNode, useEffect } from "react"
import { useLocation } from "react-router"

interface Props {
    children: ReactNode
}

export function ScrollToTop({ children }: Props) {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return <>{children}</>
}
