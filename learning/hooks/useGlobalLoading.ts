"use client";
import { useEffect, useState } from "react";
import { loadingBus } from "@/components/commoncomponents/Loading";

export function useGlobalLoading() {
    const [active, set] = useState(loadingBus.active);
    useEffect(() => loadingBus.subscribe(set), []);
    return active;
}
