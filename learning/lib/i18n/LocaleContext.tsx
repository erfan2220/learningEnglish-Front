// lib/i18n/LocaleContext.tsx

'use client';

import {createContext , useContext , ReactNode } from 'react';

type Ctx = {locale: string; message: Record<string, any>, t:(key:string , fallback?:string) => string};

const C =createContext<Ctx | null>(null);

export function LocaleProvider({locale, messages,children}: { locale: string; messages: Record<string, any>; children: ReactNode })
{
    const t = (key: string, fallback?: string) => key.split('.').reduce((o, k) => (o ? o[k] : undefined), messages) ?? fallback ?? key;
    return <C.Provider value={{ locale, messages, t }}>{children}</C.Provider>;
}

export function useI18n() {
    const ctx = useContext(C);
    if (!ctx) throw new Error('useI18n must be used within <LocaleProvider>');
    return ctx;
}