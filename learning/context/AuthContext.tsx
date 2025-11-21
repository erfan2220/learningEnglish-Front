"use client";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { api } from "@/lib/APIs/axiosInstance";
import Cookies from "js-cookie";

type User = { id: number; email: string; first_name: string; last_name: string; is_teacher: boolean; profile_picture?: string | null; };

type AuthCtx = {
    user: User | null;
    loading: boolean;
    refresh: () => Promise<void>;
    logout: () => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    register: (payload: { email: string; password: string; first_name: string; last_name: string; is_teacher: boolean }) => Promise<void>;
};

const Ctx = createContext<AuthCtx>({
    user: null, loading: true,
    refresh: async () => {}, logout: async () => {},
    login: async () => {}, register: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const loadMe = useCallback(async () => {
        try {
            const access = localStorage.getItem("access_token");
            const refresh = localStorage.getItem("refresh_token");

            // If we have nothing, don't spam the API
            if (!access && !refresh) {
                setUser(null);
                return;
            }

            // Try with current access token
            const { data } = await api.get("/api/me/");
            setUser(data);
        } catch {
            // Try refresh only if we actually have a refresh token
            const refresh = localStorage.getItem("refresh_token");
            if (refresh) {
                try {
                    const { data } = await api.post("/api/token/refresh/", { refresh });
                    localStorage.setItem("access_token", data.access);
                    api.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;
                    const me = await api.get("/api/me/");
                    setUser(me.data);
                } catch {
                    setUser(null);
                }
            } else {
                setUser(null);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { void loadMe(); }, [loadMe]);

    const refresh = useCallback(async () => { await loadMe(); }, [loadMe]);



    const login = useCallback(async (email: string, password: string) => {
        const { data } = await api.post("/api/login/", { email, password });
        // persist tokens for the interceptor
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        // make sure subsequent requests in this tick carry the new token
        api.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;
        await loadMe();
    }, [loadMe]);

    const logout = useCallback(async () => {
        try { await api.post("/api/logout/"); } catch {}
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        delete api.defaults.headers.common["Authorization"];
        
        // پاک کردن تمام کوکی‌ها
        const allCookies = Cookies.get();
        Object.keys(allCookies).forEach((cookieName) => {
        Cookies.remove(cookieName);
        });
        
        setUser(null);
    }, []);

    const register = useCallback(async (payload: { email: string; password: string; first_name: string; last_name: string; is_teacher: boolean }) => {
        await api.post("/api/register/", payload);
        await loadMe();
    }, [loadMe]);

    return (
        <Ctx.Provider value={{ user, loading, refresh, logout, login, register }}>
            {children}
        </Ctx.Provider>
    );
}
export function useAuth() { return useContext(Ctx); }
