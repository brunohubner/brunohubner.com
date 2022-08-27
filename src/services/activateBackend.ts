import { api } from "../http/api"
import { headers } from "../http/headers"

export function activateBackend(): void {
    try {
        api.get("/", headers)
    } catch {
        //
    }
}
