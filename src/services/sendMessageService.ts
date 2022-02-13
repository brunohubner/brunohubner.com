import { api } from "../http/api"

export async function sendMessageService(message: string): Promise<void> {
    await api.post("/message", { message })
}
