import { api } from '../http/api';

export async function activateBackend(): Promise<void> {
  try {
    await api.get('/');
  } catch {
    //
  }
}
