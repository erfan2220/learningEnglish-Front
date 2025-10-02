import axios, {
    type AxiosInstance,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
} from 'axios';
import type { AppStore } from '../store';
import { beginRequest, endRequest } from '../store/slices/loadingSlice';

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL; // e.g. http://127.0.0.1:8000

export const api = axios.create({
    baseURL,
    withCredentials: false,
    timeout:100000,//100 seconds
    // headers: { 'Content-Type': 'application/json' },
});

// Extend Axios config with our meta
export type AppAxiosRequestConfig = InternalAxiosRequestConfig & {
    meta?: { skipLoading?: boolean };
};

let interceptorsAttached = false;

/**
 * Call this ONCE on the client after creating the Redux store.
 */
export function attachAxiosLoading(instance: AxiosInstance, store: AppStore) {
    if (interceptorsAttached) return;
    interceptorsAttached = true;

    // REQUEST → turn on loader (unless skipped) + attach token if present
    instance.interceptors.request.use((cfg) => {
        const config = cfg as AppAxiosRequestConfig;

        if (!config.meta?.skipLoading) {
            store.dispatch(beginRequest());
        }

        // Attach Authorization only in browser
        if (typeof window !== 'undefined') {
            const access = localStorage.getItem('access_token');
            if (access) {
                config.headers = config.headers ?? {};
                config.headers['Authorization'] = `Bearer ${access}`;
            }
        }

        // ✅ If sending FormData, let the browser set the boundary
        if (config.data instanceof FormData) {
            config.headers = config.headers ?? {};
            delete (config.headers as any)["Content-Type"];
        } else {
            // For plain JSON payloads only:
            config.headers = config.headers ?? {};
            config.headers["Content-Type"] = config.headers["Content-Type"] ?? "application/json";
        }


        return config;
    });

    // RESPONSE (success) → turn off loader
    instance.interceptors.response.use(
        (res: AxiosResponse) => {
            const cfg = res.config as AppAxiosRequestConfig;
            if (!cfg.meta?.skipLoading) {
                store.dispatch(endRequest());
            }
            return res;
        },
        async (error) => {
            const cfg = error?.config as AppAxiosRequestConfig | undefined;

            // Always end request on error (unless explicitly skipped)
            if (cfg && !cfg.meta?.skipLoading) {
                store.dispatch(endRequest());
            }

            // ---- 401 refresh flow (optional) ----
            const status = error?.response?.status;
            if (status === 401 && cfg && !(cfg as any).__isRetry) {
                if (typeof window !== 'undefined') {
                    const refresh = localStorage.getItem('refresh_token');
                    if (refresh) {
                        try {
                            // Mark the refresh call as "quiet"
                            const { data } = await instance.post(
                                '/api/token/refresh/',
                                { refresh },
                                { meta: { skipLoading: true } } as AppAxiosRequestConfig
                            );

                            localStorage.setItem('access_token', data.access);

                            cfg.headers = cfg.headers ?? {};
                            cfg.headers['Authorization'] = `Bearer ${data.access}`;
                            (cfg as any).__isRetry = true;

                            // Re-dispatch beginRequest for the retried call if original wasn’t skipped
                            if (!cfg.meta?.skipLoading) {
                                store.dispatch(beginRequest());
                            }

                            return instance.request(cfg);
                        } catch {
                            // fall through to reject
                        }
                    }
                }
            }

            return Promise.reject(error);
        }
    );
}
