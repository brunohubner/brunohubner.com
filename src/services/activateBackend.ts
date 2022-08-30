import { api } from '../http/api';
import { headers } from '../http/headers';

export async function activateBackend(): Promise<void> {
  try {
    await api.get('/', headers);
  } catch {
    //
  }
}
