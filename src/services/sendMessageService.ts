import { api } from "../http/api"

export async function sendMessageService(message: string): Promise<void> {
    const resp = await api.post("/message", { message })
    if (resp.status !== 204) throw new Error()
}
