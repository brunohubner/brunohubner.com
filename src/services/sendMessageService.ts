import { api } from "../http/api"
import { headers } from "../http/headers"

export interface SendMessageData {
    message: string
    address: string
    ip: string
}

export async function sendMessageService(data: SendMessageData): Promise<void> {
    const resp = await api.post("/message", data, headers)
    if (resp.status !== 204) throw new Error()
}
