import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import GlobalLoader from "@/components/ui/GlobalLoader";
import {AuthProvider} from "@/context/AuthContext";
import Providers from "./providers"
export const metadata: Metadata = {
  title: "FluentDoor",
  description: "FluentDoor connects language learners with certified native tutors for personalized online lessons. Master English, Spanish, French, German, Japanese and 50+ languages through live video sessions, flexible scheduling, and customized curriculum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
          <body suppressHydrationWarning>
              {/*<GlobalLoader />*/}
              <AuthProvider>
                  <Providers>
                      <Header />
                      {children}


                      <Footer />
                  </Providers>
              </AuthProvider>
          </body>
      </html>
  );
}
