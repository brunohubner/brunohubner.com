import { AxiosRequestConfig } from 'axios';
import { env } from '../config/env';

export const headers: AxiosRequestConfig = {
  headers: {
    apiKey: env.API_KEY
  }
};
