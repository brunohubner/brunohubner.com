import { api } from "../http/api"

export function activateBackend(): void {
    try {
        api.get("/")
    } catch {
        //
    }
}
