// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { decodeJwt } from "jose";
// // import { match } from '@formatjs/intl-localematcher'
// import { match as matchLocale } from '@formatjs/intl-localematcher'
// import Negotiator from 'negotiator'
//
// const locales = ['en', 'nl'] as const
// const defaultLocale = 'en'
//
//
// const PUBLIC_FILE = /\.(.*)$/ // e.g. /favicon.ico, /robots.txt, /images.png
//
// // let languages = new Negotiator({ headers }).languages()
// // let headers = { 'accept-language': 'en-US,en;q=0.5' }
//
// function getLocale(req: NextRequest) {
//     // Build a node-like headers object for Negotiator
//     const negotiatorHeaders:Record<string, string> = {}
//
//     req.headers.forEach((value,key) => (
//         negotiatorHeaders[key] = value
//     ))
//
//     const languages = new Negotiator({headers: negotiatorHeaders}).languages()
//     return matchLocale(languages,locales,defaultLocale)
// }
//
//
//
//
// export function middleware(req: NextRequest)
// {
//
//     // const path = req.nextUrl.pathname;
//
//     const { pathname } = req.nextUrl
//
//     const pathnameHasLocale = locales.some(
//         (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}/`,
//     )
//
//     // Skip next, api, and static files
//     if (
//         pathname.startsWith('/_next') ||
//         pathname.startsWith('/api') ||
//         PUBLIC_FILE.test(pathname)
//     ) {
//         return NextResponse.next()
//     }
//
//     // 1) Ensure a locale is present in the pathname
//     const isMissingLocale = locales.every(
//         (locale) => !pathname.startsWith(`/${locale}/`) &&
//             pathname !== `/${locale}/`,
//     )
//
//
//
//     if(isMissingLocale){
//         const locale = getLocale(req)
//         const url = req.nextUrl.clone()
//         url.pathname = `${locale}${pathname}`
//         return NextResponse.redirect(url)
//     }
//
//     // 2) After here, we know the path is /:locale/...
//     const [,locale,...rest] = pathname.split('/')
//     const firstSegment = `/${rest[0] ?? ''}/` // e.g. "/account", "/teacher", "/"
//
//     const protectedRoots = new Set([`/account`,'/teacher'])
//     const needsAuth = protectedRoots.has(firstSegment)
//
//     if (!needsAuth) return NextResponse.next();
//
//     const token = req.cookies.get("access_token")?.value;
//
//
//     const goSignIn = ()=>{
//         const url = req.nextUrl.clone()
//         url.pathname = `/${locale}/signin`
//
//         // Preserve the path AFTER the locale for "next"
//         const nextPath = `/${rest.join('/')}`
//         if (nextPath !== '/') url.searchParams.set('next', nextPath)
//         return NextResponse.redirect(url)
//     }
//
//     if (!token) {
//         return goSignIn()
//     }
//
//     try {
//         const claims = decodeJwt(token)
//
//         // Expired?
//         if (claims?.exp && Date.now() >= claims.exp * 1000) {
//             return goSignIn()
//         }
//
//         // Role-gate: /teacher must be a teacher
//         if (firstSegment === '/teacher' && !(claims as any)?.is_teacher) {
//             const url = req.nextUrl.clone()
//             url.pathname = `/${locale}/`
//             return NextResponse.redirect(url)
//         }
//
//         return NextResponse.next()
//     } catch {
//         return goSignIn()
//     }
//
// }
//
// export const config = {
//     // Run on all paths except _next, api, and files with an extension
//     matcher: ['/((?!_next|api|.*\\..*).*)'],
// }

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeJwt } from "jose";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";

export function middleware(req: NextRequest) {
  // 1️⃣ i18n routing (اضافه کردن /fa /en اگر نبود)
  const i18nResponse = i18nRouter(req, i18nConfig);
  if (i18nResponse) return i18nResponse;

  const pathname = req.nextUrl.pathname;

  // pathname: /fa/account/profile
  const segments = pathname.split("/");
  const locale = segments[1]; // fa | en | fr
  const restPath = `/${segments.slice(2).join("/")}`; // /account/profile

  const needsAuth =
    restPath.startsWith("/account") ||
    restPath.startsWith("/teacher") ||
    restPath.startsWith("/dashboard");

  if (!needsAuth) return NextResponse.next();

  const token = req.cookies.get("access_token")?.value;

  const redirectToSignin = () => {
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}/signin`;
    url.searchParams.set("next", restPath);
    return NextResponse.redirect(url);
  };

  if (!token) return redirectToSignin();

  let claims: any;
  try {
    claims = decodeJwt(token);
  } catch {
    return redirectToSignin();
  }

  // Expired?
  if (claims?.exp && Date.now() >= claims.exp * 1000) {
    return redirectToSignin();
  }

  // Role-based access
  if (restPath.startsWith("/teacher") && !claims?.is_teacher) {
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};


// export function middleware(req: NextRequest) {
//   // 1️⃣ i18n routing (اضافه کردن /fa /en اگر نبود)
//   const i18nResponse = i18nRouter(req, i18nConfig);
//   if (i18nResponse) return i18nResponse;

//   // =============================================
//   const path = req.nextUrl.pathname;

//   const needsAuth =
//     // path.startsWith("/dashboard") ||
//     path.startsWith("/account") || path.startsWith("/teacher");

//   if (!needsAuth) return NextResponse.next();

//   const token = req.cookies.get("access_token")?.value;
//   if (!token) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/signin";
//     url.searchParams.set("next", path);
//     return NextResponse.redirect(url);
//   }

//   // Decode ONLY for UX; do not trust for data authorization
//   let claims: any;
//   try {
//     claims = decodeJwt(token);
//   } catch {
//     const url = req.nextUrl.clone();
//     url.pathname = "/signin";
//     url.searchParams.set("next", path);
//     return NextResponse.redirect(url);
//   }

//   // Expired?
//   if (claims?.exp && Date.now() >= claims.exp * 1000) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/signin";
//     url.searchParams.set("next", path);
//     return NextResponse.redirect(url);
//   }

//   // Role gating example: /teacher must be a teacher
//   if (path.startsWith("/teacher") && !claims?.is_teacher) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/";
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();

//   // =============================================
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/account/:path*", "/teacher/:path*"],
// };
