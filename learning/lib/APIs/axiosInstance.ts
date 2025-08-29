import axios from "axios";
import type { AxiosError } from "axios";
let refreshing = false;
let queue: Array<() => void> = [];

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL, // e.g. http://103.75.196.105
  withCredentials: true,                         // send/receive cookies
  headers: { "Content-Type": "application/json" }
});

api.interceptors.response.use(
    r => r,
    async (error: AxiosError) => {
      if (error.response?.status === 401 && !refreshing) {
        try {
          refreshing = true;
          await api.post("/api/token/refresh/"); // server reads refresh cookie
          queue.forEach(fn => fn());
          queue = [];
          return api.request(error.config!);
        } finally {
          refreshing = false;
        }
      }
      if (error.response?.status === 401 && refreshing) {
        return new Promise((resolve) => {
          queue.push(() => resolve(api.request(error.config!)));
        });
      }
      throw error;
    }
);
