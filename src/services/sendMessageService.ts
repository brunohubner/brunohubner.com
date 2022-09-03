import { api } from '../http/api';

export interface SendMessageData {
  message: string;
  address: string;
  ip: string;
}

export async function sendMessageService(data: SendMessageData): Promise<void> {
  const resp = await api.post('/message', data);
  if (resp.status !== 204) throw new Error();
}
