// axiosInstance.ts
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL; // e.g. http://127.0.0.1:8000

export const api = axios.create({
    baseURL,
    withCredentials: false,           // harmless if not using cookies
    headers: { "Content-Type": "application/json" },
});

// Attach Authorization for every request if we have a token
api.interceptors.request.use((cfg) => {
    const access = localStorage.getItem("access_token");
    if (access) cfg.headers["Authorization"] = `Bearer ${access}`;
    return cfg;
});

// Refresh on 401 and retry
api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const status = error.response?.status;
        const cfg = error.config;

        if (status === 401 && !cfg.__isRetry) {
            const refresh = localStorage.getItem("refresh_token");
            if (refresh) {
                try {
                    const { data } = await api.post("/api/token/refresh/", { refresh });
                    localStorage.setItem("access_token", data.access);

                    // set header for the failed request + mark to avoid loops
                    cfg.headers["Authorization"] = `Bearer ${data.access}`;
                    cfg.__isRetry = true;
                    return api.request(cfg);
                } catch { /* fall through */ }
            }
        }
        return Promise.reject(error);
    }
);
