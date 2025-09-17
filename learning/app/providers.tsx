//@ts-nocheck
'use client';

import { Provider } from 'react-redux';
import { ReactNode, useRef } from 'react';
import { makeStore, type AppStore } from '@/lib/store';
import { api, attachAxiosLoading } from '@/lib/APIs/axiosInstance';

export default function Providers({ children }: { children: ReactNode }) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore();
        attachAxiosLoading(api, storeRef.current); // ✅ attach once after store is created
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
