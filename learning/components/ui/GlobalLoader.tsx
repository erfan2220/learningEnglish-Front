// components/GlobalLoader.tsx
"use client";
import { useEffect, useState } from "react";
import { loadingBus } from "@/components/commoncomponents/Loading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2 } from "lucide-react";

export default function GlobalLoader() {
    const [active, setActive] = useState(loadingBus.active);
    useEffect(() => loadingBus.subscribe(setActive), []);
    if (!active) return null;
    return (
        <div className="fixed inset-0 z-[9999] grid place-items-center bg-black/30 backdrop-blur-sm">
            <Card className="w-[320px]">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Loading…
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Indeterminate />
                </CardContent>
            </Card>
        </div>
    );
}

function Indeterminate() {
    const [v, setV] = useState(10);
    useEffect(() => {
        let dir = 1;
        const id = setInterval(() => {
            setV((prev) => {
                let next = prev + dir * 10;
                if (next >= 90) dir = -1;
                if (next <= 10) dir = 1;
                return next;
            });
        }, 120);
        return () => clearInterval(id);
    }, []);
    return <Progress value={v} />;
}
