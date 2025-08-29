"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { api } from "@/lib/APIs/axiosInstance";

type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    is_teacher: boolean;
    profile_picture?: string | null;
};

type AuthCtx = {
    user: User | null;
    loading: boolean;
    refresh: () => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthCtx>({
    user: null,
    loading: true,
    refresh: async () => {},
    logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const loadMe = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await api.get("/api/me/"); // <-- your Django endpoint
            setUser(data);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void loadMe();
    }, [loadMe]);

    const refresh = useCallback(async () => {
        await loadMe();
    }, [loadMe]);

    const logout = useCallback(async () => {
        try {
            await api.post("/api/logout/"); // if you have it; if not, user becomes null locally
        } catch {}
        setUser(null);
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, refresh, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
