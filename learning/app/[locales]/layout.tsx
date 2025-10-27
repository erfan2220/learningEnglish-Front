// app/[locale]/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import GlobalLoader from "@/components/ui/GlobalLoader";
import { AuthProvider } from "@/context/AuthContext";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";

import {notFound} from "next/navigation";
import {ReactNode} from "react";
import {locales, type Locale, defaultLocale} from "@/lib/i18n";
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { LocaleProvider } from '@/lib/i18n/LocaleContext';


export const metadata: Metadata = {
  title: "FluentDoor",
  description:
    "FluentDoor connects language learners with certified native tutors for personalized online lessons. Master English, Spanish, French, German, Japanese and 50+ languages through live video sessions, flexible scheduling, and customized curriculum.",
};


type Props = {
  children:ReactNode;
  params:{locale:string};
}

const dirMap:Record<string, 'ltr' | 'rtl'> = {
  en:'ltr',
  nl:'ltr',
}

export function generateStaticParams(){
  return locales.map(locale=>({locale}));
}


// Localized metadata (title/description can come from dictionary)
export  async function generateMetadata({params}: Props): Promise<Metadata> {

  const locale = params.locale as Locale;
  if(!locales.includes(locale)) return {};


  // If you store localized strings in JSON:
  const dict = await getDictionary(locale);

  const title = dict?.meta?.title ?? 'FluentDoor';

  const description = dict?.meta?.description ??
      'FluentDoor connects language learners with certified native tutors for personalized online lessons. ' +
      'Master English, Spanish, French, German, Japanese and 50+ languages through live video sessions,' +
      ' flexible scheduling, and customized curriculum.';


  // Helpful for correct absolute URLs in alternates
  const metadataBase =
      process.env.NEXT_PUBLIC_SITE_URL
          ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
          : undefined;


  //Language alternatives for SEO
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}`]));


  return {

    title,
    description,
    metadataBase,
    alternates:{
      languages,
      canonical: `/${locale}`,
    },
    openGraph:{
      title,
      description,
      url:`/${locale}`,
      siteName:'FluentDoor',
      locale,
      type:'website',
    },
  };
}








export default async function RootLayout({ children, params }: Props)
{

  const locale = params.locale as Locale;
  if(!locales.includes(locale)) notFound();


  // Load messages server-side (fast + tree-shakeable)
  const messages = await getDictionary(locale);


  return (
    <html lang={locale} dir={ dirMap[locale]?? 'ltr'} suppressHydrationWarning>
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        {/*<GlobalLoader />*/}
        <AuthProvider>
          <Providers>
            <Header />
            <main className="flex-grow">{children}</main>
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                duration: 5000,
              }}
            />

            <Footer />
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
