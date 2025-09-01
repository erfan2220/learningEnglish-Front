import axios, { AxiosError } from "axios";

let refreshing = false;
let queue: Array<() => void> = [];

const base = process.env.NEXT_PUBLIC_BASE_API_URL?.trim() || ""; // same-origin by default

export const api = axios.create({
     baseURL: base,           // '' means use window origin
    // baseURL: "base",           // '' means use window origin
    withCredentials: true,   // send/receive cookies
    headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(
    (r) => r,
    async (error: AxiosError) => {
        const status = error.response?.status;
        const cfg = error.config!;
        if (status === 401) {
            if (!refreshing) {
                try {
                    refreshing = true;
                    await api.post("/api/token/refresh/"); // server reads refresh cookie
                    queue.forEach((fn) => fn());
                    queue = [];
                    return api.request(cfg);
                } catch (e) {
                    // refresh failed -> clear queue (reject) and bubble up
                    queue = [];
                    throw e;
                } finally {
                    refreshing = false;
                }
            }
            // if a refresh is in-flight, enqueue this request
            return new Promise((resolve) => {
                queue.push(() => resolve(api.request(cfg)));
            });
        }
        throw error;
    }
);
