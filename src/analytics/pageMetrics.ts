import ReactGa from "react-ga"
import { env } from "../config/env"

export function pageMetrics(): void {
    ReactGa.initialize(env.ID_ANALYTICS)
    ReactGa.pageview(window.location.pathname + window.location.search)
}
