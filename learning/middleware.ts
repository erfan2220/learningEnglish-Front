import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeJwt } from "jose";

export function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    const needsAuth =
        path.startsWith("/dashboard") ||
        path.startsWith("/account") ||
        path.startsWith("/teacher");

    if (!needsAuth) return NextResponse.next();

    const token = req.cookies.get("access_token")?.value;
    if (!token) {
        const url = req.nextUrl.clone();
        url.pathname = "/signin";
        url.searchParams.set("next", path);
        return NextResponse.redirect(url);
    }

    // Decode ONLY for UX; do not trust for data authorization
    let claims: any;
    try {
        claims = decodeJwt(token);
    } catch {
        const url = req.nextUrl.clone();
        url.pathname = "/signin";
        url.searchParams.set("next", path);
        return NextResponse.redirect(url);
    }

    // Expired?
    if (claims?.exp && Date.now() >= claims.exp * 1000) {
        const url = req.nextUrl.clone();
        url.pathname = "/signin";
        url.searchParams.set("next", path);
        return NextResponse.redirect(url);
    }

    // Role gating example: /teacher must be a teacher
    if (path.startsWith("/teacher") && !claims?.is_teacher) {
        const url = req.nextUrl.clone();
        url.pathname = "/";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/account/:path*", "/teacher/:path*"],
};
