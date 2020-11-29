import axios, { AxiosInstance } from 'axios';
import { token } from '../utils';

// Attempts to read the API URL from your ENV, falls back to localhost
const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const axiosWithAuth = (): AxiosInstance =>
  axios.create({
    baseURL,
    headers: {
      Authorization: token.get(),
    },
  });

export const axiosWithoutAuth = (): AxiosInstance =>
  axios.create({
    baseURL,
  });
