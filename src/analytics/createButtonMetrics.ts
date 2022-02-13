import ReactGa from "react-ga"

export function createButtonMetrics(action: string): void {
    ReactGa.event({ category: "Button", action })
}
