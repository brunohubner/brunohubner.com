import axios from 'axios';
import { env } from '../config/env';

const api = axios.create({ baseURL: env.API_URL });

api.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';

export { api };
