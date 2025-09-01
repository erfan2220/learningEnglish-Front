"use client";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { api } from "@/lib/APIs/axiosInstance";

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
            const { data } = await api.get("/api/me/");
            setUser(data);
        } catch {
            // try silent refresh once
            try {
                await api.post("/api/token/refresh/");
                const { data } = await api.get("/api/me/");
                setUser(data);
            } catch {
                setUser(null);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { void loadMe(); }, [loadMe]);

    const refresh = useCallback(async () => { await loadMe(); }, [loadMe]);

    const logout = useCallback(async () => {
        try { await api.post("/api/logout/"); } catch {}
        setUser(null);
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        await api.post("/api/login/", { email, password });
        await loadMe();
    }, [loadMe]);

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
