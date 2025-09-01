import * as React from "react";
import { cn } from "@/lib/utils";

export type CardProps = React.ComponentProps<"div">;

function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border bg-white text-gray-900 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
                className
            )}
            {...props}
        />
    );
}
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />;
}
function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
    return <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />;
}
function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
    return <p className={cn("text-sm text-gray-500 dark:text-gray-400", className)} {...props} />;
}
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return <div className={cn("p-6 pt-0", className)} {...props} />;
}
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return <div className={cn("flex items-center p-6 pt-0", className)} {...props} />;
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
